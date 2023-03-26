require_relative "board.rb"

# Contains game logic for a tictactoe game
class Tictactoe
  attr_reader :board

  PLAYER_1_MARKER = "X"
  PLAYER_2_MARKER = "O"

  def initialize
    @board = Board.new
    @current_player = 1
  end

  def play
    while true
      board.print_board
      players_turn
      if board.game_is_won?
        puts "Player #{@current_player} wins!"
        return
      elsif board.board_full?
        puts "Tie game..."
        return
      else
        switch_turns
      end
    end
  end

  def switch_turns
    current_player == 1 ? current_player = 2 : current_player = 1
  end

  def players_turn
    
  end
end
