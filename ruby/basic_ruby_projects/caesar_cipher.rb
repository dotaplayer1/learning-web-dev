# takes in a string and a shift factor, then returns
# a string that has been encrypted with caesar cipher
def caesar_cipher(string, shift_factor)
  result = ""
  shift_factor %= 26
  string.each_char do |c|
    if c.ord >= 65 && c.ord <= 90
      temp = ((c.ord + shift_factor - 65) % 26 + 65).chr
      result += temp
    elsif c.ord >= 97 && c.ord <= 122
      temp = ((c.ord + shift_factor - 97) % 26 + 97).chr
      result += temp
    else
      result += c
    end
  end
  result
end

puts caesar_cipher("What a string!", 5)