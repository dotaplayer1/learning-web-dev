require_relative 'game'
require_relative 'save_load_stuff'

class StartMenu
  attr_accessor :input, :load

  def initialize
    @input = nil
    @load = SaveLoadStuff.new
  end

  def start_game
    puts 'Welcome to hangman! Choose an option by typing 1 or 2'
    puts '  1) Start a new game'
    puts '  2) Load saved game'
    ask_for_option
    create_new_game if input == '1'
    load_saved_game if input == '2'
  end

  def ask_for_option
    loop do
      @input = gets.chomp
      return if option_is_valid?(input)
    end
  end

  def option_is_valid?(input)
    /^[12]$/.match?(input)
  end

  def create_new_game
    game = Game.new(generate_word)
    game.play
  end

  def generate_word
    loop do
      word = random_word
      return word if word.length >= 5 && word.length <= 12
    end
  end

  def random_word
    file = File.open('google-10000-english-no-swears.txt')
    word = file.readlines[rand(9894)]
    file.close
    word.strip
  end

  def load_saved_game
    saved_info = load.load_file
    game = Game.new(saved_info[:word],
                    saved_info[:guesses],
                    saved_info[:letters_guessed],
                    saved_info[:solved_letters])
    game.play
  end
end
