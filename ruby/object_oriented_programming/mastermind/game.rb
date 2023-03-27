require_relative "game_logic.rb"

# Contains the game logic for the mastermind game
class Game
  attr_reader :game_logic, :turns

  def initialize
    @game_logic = GameLogic.new
    @turns = 12
  end

  def play
    puts "A code has been generated. Good luck guessing it :)"
    while turns > 0
      puts "Number of turns left: #{turns}"
      input = ask_for_input
      if game_logic.code_is_correct?(input)
        puts "The code is correct! You win!"
        return
      else
        results = game_logic.compare_with_code(input) 
        puts "Correct numbers in correct positions: #{results[0]}"
        puts "Correct numbers in incorrect positions: #{results[1]}"
      end
      puts ""
      @turns -= 1
    end
    puts "You lose! The correct code was #{game_logic.random_code.join}"
  end

  def ask_for_input
    while true
      print "Enter a 4 digit guess containing numbers between 1-6: "
      input = gets.chomp
      if is_valid_input?(input)
        input = mutate_input(input)
        return input
      else
        puts "Invalid input."
      end
    end
  end

  def is_valid_input?(input)
    if input.length != 4 then return false end
    input = mutate_input(input)
    if input.any? { |i| i > 6 || i < 1 } then return false end
    true
  end

  def mutate_input(input)
    input.split("").map { |i| i.to_i }
  end
end