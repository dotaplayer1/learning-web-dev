require "./lib/game.rb"

describe Game do
  subject(:game) { described_class.new }

  describe "#move_within_bounds?" do
    context "when move is in bounds of the board" do
      it "returns true for 0" do
        valid_move = 0
        expect(game.move_within_bounds?(valid_move)).to eql(true)
      end

      it "returns true for 6" do
        valid_move = 6
        expect(game.move_within_bounds?(valid_move)).to eql(true)
      end
    end

    context "when move is not in bounds of the board" do
      it "returns false for 7" do
        invalid_move = 7
        expect(game.move_within_bounds?(invalid_move)).to eql(false)
      end

      it "returns true for -1" do
        invalid_move = -1
        expect(game.move_within_bounds?(invalid_move)).to eql(false)
      end
    end
  end

  describe "#column_not_full?" do
    context "when column is not full" do
      subject(:not_full_column_game) { described_class.new([0, 5, 0, 0, 0, 0, 0]) }
      it "returns true" do 
        expect(not_full_column_game.column_not_full?(1)).to be(true)
      end
    end

    context "when column is full" do
      subject(:full_column_game) { described_class.new([0, 6, 0, 0, 0, 0, 0]) }
      it "returns false" do 
        expect(full_column_game.column_not_full?(1)).to be(false)
      end
    end
  end
end