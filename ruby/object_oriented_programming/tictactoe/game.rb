require_relative "board.rb"

# Contains game logic for a tictactoe game
class Tictactoe
  attr_reader :board

  def initialize
    @board = Board.new
    @current_player = 1
  end

  def play
    while true
      board.print_board
      play_a_turn
      if board.game_is_won?
        board.print_board
        puts "Player #{@current_player} wins!"
        return
      elsif board.board_full?
        board.print_board
        puts "Tie game..."
        return
      else
        switch_turns
      end
    end
  end

  def switch_turns
    @current_player == 1 ? @current_player = 2 : @current_player = 1
  end

  def play_a_turn
    input = 0
    while true
      print "Player #{@current_player}, Enter a position: "
      input = gets.chomp.to_i
      if board.valid_move?(input)
        case @current_player
        when 1
          board.place_marker(input, "X")
        when 2
          board.place_marker(input, "O")
        end
        return
      else
        puts "Invalid move"
      end
    end
  end
end
