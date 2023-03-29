require_relative 'save_load_stuff'

class Game
  attr_accessor :word, :guesses, :letters_guessed, :solved_letters, :save

  def initialize(word, guesses, letters_guessed, solved_letters = Array.new(word.length))
    @save = SaveLoadStuff.new
    @word = word
    @guesses = guesses
    @letters_guessed = letters_guessed
    @solved_letters = solved_letters
  end

  def play
    while guesses.positive?
      display_info
      input = ask_for_input
      update_solved_letters(input)
      return if game_won?
    end
    puts "You lose! The word was '#{word}'" unless game_won?
  end

  def display_info
    display_word
    puts "Letters guessed: #{letters_guessed.inspect}"
    puts "Guesses left: #{guesses}"
  end

  def display_word
    solved_letters.each_with_index do |letter, index|
      if letter.nil?
        print '_ '
      else
        print "#{word[index]} "
      end
    end
    puts "\n\n"
  end

  def ask_for_input
    loop do
      puts 'Enter a letter: '
      input = gets.chomp.downcase
      save.save_file(word, guesses, letters_guessed, solved_letters) if input == 'save'
      return input if input_valid?(input) && input_used_before?(input)
    end
  end

  def input_valid?(input)
    return true if /^[a-zA-Z]$/.match?(input)

    puts 'Invalid input'
  end

  def input_used_before?(input)
    if letters_guessed.any? { |letter| input == letter }
      puts 'Letter guessed before'
    else
      @letters_guessed.push(input)
      true
    end
  end

  def update_solved_letters(input)
    no_match = true
    word.split('').each_with_index do |letter, index|
      if letter == input
        @solved_letters[index] = true
        no_match = false
      end
    end
    @guesses -= 1 if no_match
  end

  def game_won?
    return unless solved_letters.all? { |i| i == true }

    puts word
    puts 'You solved the word!'
    true
  end
end
