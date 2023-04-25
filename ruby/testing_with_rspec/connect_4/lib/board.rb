require_relative "pieces.rb"

class Board
  include Markers
  attr_reader :board

  def initialize
    @board = [[0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0]]
  end

  def print_board
    board.each do |row|
      row.each do |tile|
        print_tile(tile)
      end
      puts ""
    end
  end

  def print_tile(tile)
    case tile
    when 0
      print empty_tile
    when 1
      print yellow_marker
    when 2
      print blue_marker
    end
    print " "
  end

  def place_marker(row, col, marker)
    board[row][col] = marker
  end
end
