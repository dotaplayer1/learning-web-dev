require 'csv'
require 'google/apis/civicinfo_v2'
require 'erb'
require 'date'
require 'pry'

def clean_zipcode(zipcode)
  zipcode.to_s.rjust(5,"0")[0..4]
end

def legislators_by_zipcode(zip)
  civic_info = Google::Apis::CivicinfoV2::CivicInfoService.new
  civic_info.key = 'AIzaSyClRzDqDh5MsXwnCWi0kOiiBivP6JsSyBw'

  begin
    civic_info.representative_info_by_address(
      address: zip,
      levels: 'country',
      roles: ['legislatorUpperBody', 'legislatorLowerBody']
    ).officials
  rescue
    'You can find your representatives by visiting www.commoncause.org/take-action/find-elected-officials'
  end
end

def save_thank_you_letter(id,form_letter)
  Dir.mkdir('output') unless Dir.exist?('output')

  filename = "output/thanks_#{id}.html"

  File.open(filename, 'w') do |file|
    file.puts form_letter
  end
end

puts 'EventManager initialized.'

# contents = CSV.open(
#   'event_attendees.csv',
#   headers: true,
#   header_converters: :symbol
# )

# template_letter = File.read('form_letter.erb')
# erb_template = ERB.new template_letter

# contents.each do |row|
#   id = row[0]
#   name = row[:first_name]
#   zipcode = clean_zipcode(row[:zipcode])
#   legislators = legislators_by_zipcode(zipcode)

#   form_letter = erb_template.result(binding)

#   save_thank_you_letter(id,form_letter)
# end

def open_file
  contents = CSV.open(
    "event_attendees.csv",
    headers: true,
    header_converters: :symbol
  )
end

def print_numbers
  contents = open_file

  contents.each do |row|
    name = row[:first_name]
    phone_number = clean_number(row[:homephone])
    puts "#{name} #{phone_number}"
  end
end

def clean_number(number)
  return "?" if number.nil?
  phone_number = number.gsub(/[^0-9]/, '')
  if phone_number.chars[0] == "1" && phone_number.length > 10
    phone_number = phone_number.to_s[1..-1]
  end
  if phone_number.length == 10
    phone_number
  else
    "Invalid number"
  end
end

def peak_hours
  contents = open_file
  hash = Hash.new(0)

  contents.each do |row|
    reg_date = row[:regdate] 
    reg_date = Time.strptime(reg_date, "%m/%d/%y %H:%M").strftime("%H")
    hash[reg_date] += 1
  end

  peak_hour = hash.max_by { |k, v| v }[1]
  hash.select! { |k, v| v == peak_hour }
  hash.keys
end

def peak_days
  contents = open_file
  hash = Hash.new(0)

  contents.each do |row|
    reg_date = row[:regdate]
    reg_date = Time.strptime(reg_date, "%m/%d/%y %H:%M").strftime("%Y %m %d").split
    reg_date.map! { |i| i.to_i }
    day = Date.new(reg_date[0], reg_date[1], reg_date[2]).wday
    hash[day] += 1
  end

  peak_day = hash.max_by { |k, v| v }[1]
  hash.select! { |k, v| v == peak_day}
  puts hash
  hash.keys.map { |i| i = Date::DAYNAMES[i] }
end

peak_hours
puts peak_days