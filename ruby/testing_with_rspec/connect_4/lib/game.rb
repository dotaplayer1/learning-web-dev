require_relative './board'
require 'pry'

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
      place_marker(valid_move)
      return if game_end?(valid_move)

      update_game(valid_move)
      swap_turns
    end
  end

  def place_marker(valid_move)
    board.place_marker(5 - column_height[valid_move], valid_move, player)
  end

  def game_end?(valid_move)
    if tie_game?(turns_played)
      board.print_board
      puts "\nTie game!"
      true
    elsif game_won?(valid_move)
      board.print_board
      puts "\nPlayer #{player} wins!"
      true
    end
  end

  def update_game(valid_move)
    column_height[valid_move] += 1
    @turns_played += 1
  end

  def swap_turns
    player == 1 ? @player += 1 : @player -= 1
  end

  def get_valid_move
    input = -1
    loop do
      puts ''
      puts "Player #{player}, Enter a column: "
      input = ask_for_input
      break unless is_valid_move?(input) == false

      puts 'Invalid move'
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

  def game_won?(move)
    return true if horizontal_win?(move)
    return true if vertical_win?(move)
    return true if diagonal_win_from_bottom_left?(move)
    return true if diagonal_win_from_bottom_right?(move)
  end

  def horizontal_win?(move)
    row = board.board[5 - column_height[move]]
    4.times do |i|
      position = [row[0 + i], row[1 + i], row[2 + i], row[3 + i]]
      return true if [[1, 1, 1, 1], [2, 2, 2, 2]].include?(position)
    end
    false
  end

  def vertical_win?(move)
    column = [
      board.board[0][move],
      board.board[1][move],
      board.board[2][move],
      board.board[3][move],
      board.board[4][move],
      board.board[5][move]
    ]
    4.times do |i|
      position = [column[0 + i], column[1 + i], column[2 + i], column[3 + i]]
      return true if [[1, 1, 1, 1], [2, 2, 2, 2]].include?(position)
    end
    false
  end

  def diagonal_win_from_bottom_left?(move)
    diagonal = []
    bottom_left_x = -3
    bottom_left_y = 3
    7.times do
      x_pos = bottom_left_x + move
      y_pos = bottom_left_y + 5 - column_height[move]
      diagonal.push(board.board[y_pos][x_pos]) if x_pos.between?(0, 6) && y_pos.between?(0, 5)
      bottom_left_x += 1
      bottom_left_y -= 1
    end
    if diagonal.length >= 4
      (0..diagonal.length - 4).each do |i|
        position = [diagonal[0 + i], diagonal[1 + i], diagonal[2 + i], diagonal[3 + i]]
        return true if [[1, 1, 1, 1], [2, 2, 2, 2]].include?(position)
      end
    end
    false
  end

  def diagonal_win_from_bottom_right?(move)
    diagonal = []
    bottom_left_x = 3
    bottom_left_y = 3
    7.times do
      x_pos = bottom_left_x + move
      y_pos = bottom_left_y + 5 - column_height[move]
      diagonal.push(board.board[y_pos][x_pos]) if x_pos.between?(0, 6) && y_pos.between?(0, 5)
      bottom_left_x -= 1
      bottom_left_y -= 1
    end
    if diagonal.length >= 4
      (0..diagonal.length - 4).each do |i|
        position = [diagonal[0 + i], diagonal[1 + i], diagonal[2 + i], diagonal[3 + i]]
        return true if [[1, 1, 1, 1], [2, 2, 2, 2]].include?(position)
      end
    end
    false
  end
end
