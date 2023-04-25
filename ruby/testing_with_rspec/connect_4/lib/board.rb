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
      puts ""
    end
  end

  def place_marker(row, col, marker)
    board[5 - row][col] = marker
  end
end
