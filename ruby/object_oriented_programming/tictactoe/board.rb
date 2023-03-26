# a class for a tictactoe board
class Board
  attr_reader :board

  def initialize
    @board = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  end

  WINNING_POSITIONS = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

  def print_board
    puts " #{board[1]} | #{board[2]} | #{board[3]} "
    puts "---+---+---"
    puts " #{board[4]} | #{board[5]} | #{board[6]} "
    puts "---+---+---"
    puts " #{board[7]} | #{board[8]} | #{board[9]} "
  end

  def board_full?
    board.all? { |i| i.is_a?(String) }
  end

  def game_is_won?
    WINNING_POSITIONS.each do |winning_pos|
      if [board[winning_pos[0]],
          board[winning_pos[1]],
          board[winning_pos[2]]].uniq.length == 1
        return true
      end
    end
  end

  def valid_move?(input)
    board[input] == input
  end

  def place_marker(input, marker)
    board[input] == marker
  end
end
