require_relative "game_logic.rb"

# Contains the game logic for the mastermind game
class Game
  attr_accessor :turns
  
  def initialize
    @game_logic = GameLogic.new
    @turns = 12
  end

  def play

  end
end