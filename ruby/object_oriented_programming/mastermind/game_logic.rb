# the board for a mastermind game
class GameLogic
  attr_reader :random_code

  def initialize
    @random_code = [3, 3, 3, 4]
  end

  def generate_code
    [rand(1..6), rand(1..6), rand(1..6), rand(1..6)]
  end

  def code_is_correct?(input)
    input == random_code
  end

  def compare_with_code(input)
    [exact_matches(input), non_exact_matches(input)]
  end

  def exact_matches(input)
    count = 0
    input.each_with_index do |value, index|
      if value == random_code[index]
        count += 1
      end
    end
    count
  end

  def non_exact_matches(input)
    count = 0
    cloned_code = random_code.clone
    input.each_with_index do |value, index|
      if value != cloned_code[index]
        if cloned_code.include?(value)
          count += 1
          cloned_code[cloned_code.index(value)] = nil
        end
      end
    end
    count
  end
end