require "./board.rb"

describe Board do
  subject(:board) { described_class.new }

  describe "#valid_move?" do
    context "When input is valid" do
      it "returns true when input is 1" do
        valid_input = 1
        expect(board.valid_move?(valid_input)).to eql(true)
      end

      it "returns true when input is 7" do
        valid_input = 7
        expect(board.valid_move?(valid_input)).to eql(true)
      end
    end
    context "When input is invalid" do
      it "returns false when input is 20" do
        invalid_input = 20
        expect(board.valid_move?(invalid_input)).to eql(false)
      end

      it "returns false when input is -5" do
        invalid_input = -5
        expect(board.valid_move?(invalid_input)).to eql(false)
      end
    end
  end

  describe "#game_is_won?" do
    context "When a player wins" do
      it "winning position 1" do
        won_game = [0 ,"X", "X", "X", "O", "O", 6, 7, 8, 9]
        expect(board.game_is_won?(won_game)).to eql(true)
      end

      it "winning position 2" do
        won_game = [0 , 1, "X", "X", "O", "O", "O", 7, 8, 9]
        expect(board.game_is_won?(won_game)).to eql(true)
      end

      it "winning position 3" do
        won_game = [0 , 1, "X", "X", 4, 5, 6, "O", "O", "O"]
        expect(board.game_is_won?(won_game)).to eql(true)
      end

      it "winning position 4" do
        won_game = [0, "X", 2, 3, 4, "X", 6, 7, 8, "X"]
        expect(board.game_is_won?(won_game)).to eql(true)
      end

      it "winning position 5" do
        won_game = [0, 1, 2, "X", 4, "X", 6, "X", 8, 9]
        expect(board.game_is_won?(won_game)).to eql(true)
      end

      it "winning position 6" do
        won_game = [0, "X", 2, 3, "X", 5, 6, "X", 8, 9]
        expect(board.game_is_won?(won_game)).to eql(true)
      end

      it "winning position 7" do
        won_game = [0, 1, "X", 3, 4, "X", 6, 7, "X", 9]
        expect(board.game_is_won?(won_game)).to eql(true)
      end

      it "winning position 8" do
        won_game = [0, 1, 2, "X", 4, 5, "X", 7, 8, "X"]
        expect(board.game_is_won?(won_game)).to eql(true)
      end
    end
  end
end