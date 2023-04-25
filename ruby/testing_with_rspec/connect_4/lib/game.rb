require_relative "./board.rb"
require "pry"

class Game
  attr_reader :board, :player, :column_height, :turns_played

  def initialize(column_height = [0, 0, 0, 0, 0, 0, 0])
    @board = Board.new
    @player = 1
    @column_height = column_height
    @turns_played = 0
  end

  def play
    loop do
      board.print_board
      valid_move = get_valid_move
      update_game(valid_move)
      if game_won?
        board.print_board
        puts "Game won!" 
        return
      elsif tie_game?(turns_played) 
        board.print_board
        puts "Tie game!"
        return
      end
      swap_turns
    end
  end

  def update_game(valid_move)
    board.place_marker(5 - column_height[valid_move], valid_move, player)
    column_height[valid_move] += 1
    @turns_played += 1
  end

  def swap_turns
    player == 1 ? @player += 1 : @player -= 1
  end

  def get_valid_move
    input = -1
    loop do
      puts "Player #{player}, Enter a column: "
      input = ask_for_input
      break unless is_valid_move?(input) == false
      puts "Invalid move"
    end
    input
  end

  def ask_for_input
    gets.chomp.to_i - 1
  end

  def is_valid_move?(input)
    move_within_bounds?(input) && column_not_full?(input) 
  end

  def move_within_bounds?(input)
    input >= 0 && input <= 6 
  end

  def column_not_full?(input)
    6 > column_height[input]
  end

  def tie_game?(turns)
    turns == 42
  end

  def game_won?
    false
  end
end
