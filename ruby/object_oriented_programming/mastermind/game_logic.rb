# the board for a mastermind game
class GameLogic
  attr_reader :random_code

  def initialize
    @random_code = generate_code
  end

  def generate_code
    [rand(1..6), rand(1..6), rand(1..6), rand(1..6)]
  end
end

board = GameLogic.new
puts board.random_code