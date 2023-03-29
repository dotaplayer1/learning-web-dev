require_relative "game_logic.rb"

class Game
  attr_reader :word, :guesses, :letters_guessed, :solved_letters

  def initialize(word, guesses, letters_guessed, solved_letters = Array.new(word.length))
    @word = word
    @guesses = guesses
    @letters_guessed = letters_guessed
    @solved_letters = solved_letters
  end

  def play
    while guesses > 0
      display_info
      input = ask_for_input
    end
  end

  def display_info
    display_word
    puts "Letters guessed: #{letters_guessed.inspect}"
    puts "Guesses left: #{guesses}"
  end

  def display_word
    solved_letters.each_with_index do |letter, index|
      if letter == nil
        print "_ "
      else
        print word[index] + " "
      end
    end
    puts "\n\n"
  end

  def ask_for_input
    while true
      puts "Enter a letter: "
      input = gets.chomp
      return if input_valid?(input)
      puts "Invalid input"
    end
  end

  def input_valid?(input)
    /^[a-zA-Z]$/.match?(input)
  end
end