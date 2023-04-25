require_relative './board'

class Game
  attr_reader :game_board, :player, :column_height, :turns_played

  def initialize(column_height = [0, 0, 0, 0, 0, 0, 0])
    @game_board = Board.new
    @player = 1
    @column_height = column_height
    @turns_played = 0
  end

  def play
    loop do
      game_board.print_board
      valid_move = get_valid_move
      place_marker(valid_move)
      return if game_end?(valid_move)

      update_column_height(valid_move)
      swap_turns
    end
  end

  def place_marker(valid_move)
    game_board.place_marker(5 - column_height[valid_move], valid_move, player)
  end

  def game_end?(valid_move)
    @turns_played += 1
    if tie_game?(turns_played)
      game_board.print_board
      puts "\nTie game!"
      true
    elsif game_won?(valid_move)
      game_board.print_board
      puts "\nPlayer #{player} wins!"
      true
    end
  end

  def update_column_height(valid_move)
    column_height[valid_move] += 1
  end

  def swap_turns
    player == 1 ? @player += 1 : @player -= 1
  end

  def get_valid_move
    input = -1
    loop do
      puts "\nPlayer #{player}, Enter a column: "
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
    column_height[input] < 6
  end

  def tie_game?(turns)
    turns == 42
  end

  def game_won?(move)
    row_pos = 5 - column_height[move]
    col_pos = move
    return true if horizontal_win?(row_pos, game_board.board)
    return true if vertical_win?(col_pos, game_board.board)
    return true if diagonal_win_from_bottom_left?(row_pos, col_pos, game_board.board)
    return true if diagonal_win_from_bottom_right?(row_pos, col_pos, game_board.board)
  end

  def horizontal_win?(row_pos, board)
    row = board[row_pos]
    4.times do |i|
      position = [row[0 + i], row[1 + i], row[2 + i], row[3 + i]]
      return true if [[1, 1, 1, 1], [2, 2, 2, 2]].include?(position)
    end
    false
  end

  def vertical_win?(col_pos, board)
    column = [
      board[0][col_pos],
      board[1][col_pos],
      board[2][col_pos],
      board[3][col_pos],
      board[4][col_pos],
      board[5][col_pos]
    ]
    4.times do |i|
      position = [column[0 + i], column[1 + i], column[2 + i], column[3 + i]]
      return true if [[1, 1, 1, 1], [2, 2, 2, 2]].include?(position)
    end
    false
  end

  def diagonal_win_from_bottom_left?(row_pos, col_pos, board)
    diagonal = []
    bottom_left_x = -3
    bottom_left_y = 3
    7.times do
      x_pos = bottom_left_x + col_pos
      y_pos = bottom_left_y + row_pos
      diagonal.push(board[y_pos][x_pos]) if x_pos.between?(0, 6) && y_pos.between?(0, 5)
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

  def diagonal_win_from_bottom_right?(row_pos, col_pos, board)
    diagonal = []
    bottom_left_x = 3
    bottom_left_y = 3
    7.times do
      x_pos = bottom_left_x + col_pos
      y_pos = bottom_left_y + row_pos
      diagonal.push(board[y_pos][x_pos]) if x_pos.between?(0, 6) && y_pos.between?(0, 5)
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
