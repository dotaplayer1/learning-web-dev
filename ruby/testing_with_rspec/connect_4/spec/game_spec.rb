require './lib/game'

describe Game do
  subject(:game) { described_class.new }

  describe '#move_within_bounds?' do
    context 'when move is in bounds of the board' do
      it 'returns true for 0' do
        valid_move = 0
        expect(game.move_within_bounds?(valid_move)).to eql(true)
      end

      it 'returns true for 6' do
        valid_move = 6
        expect(game.move_within_bounds?(valid_move)).to eql(true)
      end
    end

    context 'when move is not in bounds of the board' do
      it 'returns false for 7' do
        invalid_move = 7
        expect(game.move_within_bounds?(invalid_move)).to eql(false)
      end

      it 'returns true for -1' do
        invalid_move = -1
        expect(game.move_within_bounds?(invalid_move)).to eql(false)
      end
    end
  end

  describe '#column_not_full?' do
    context 'when column is not full' do
      subject(:not_full_column_game) { described_class.new([0, 5, 0, 0, 0, 0, 0]) }
      it 'returns true' do
        expect(not_full_column_game.column_not_full?(1)).to be(true)
      end
    end

    context 'when column is full' do
      subject(:full_column_game) { described_class.new([0, 6, 0, 0, 0, 0, 0]) }
      it 'returns false' do
        expect(full_column_game.column_not_full?(1)).to be(false)
      end
    end
  end

  describe '#horizontal win?' do
    context 'when there is a horizontal win' do
      it 'returns true when win on 6th row' do
        game.instance_variable_set(
          :@game_board, [[0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 1, 1, 1, 1, 0]]
        )
        expect(game.horizontal_win?(5, game.game_board)).to eql(true)
      end

      it 'returns true when win on 4th row' do
        game.instance_variable_set(
          :@game_board, [[0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 2, 2, 2, 2, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 1, 0, 1, 1, 0]]
        )
        expect(game.horizontal_win?(3, game.game_board)).to eql(true)
      end
    end

    context "when there is no horizontal win" do
      it "does not return true" do
        game.instance_variable_set(
          :@game_board, [[0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 1, 0, 1, 1, 0]]
        )
        expect(game.horizontal_win?(5, game.game_board)).to eql(false)
      end
    end
  end

  describe "#vertical win?" do
    context "when there is a vertical win" do
      it "returns true when win on column 4" do
        game.instance_variable_set(
          :@game_board, [[0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 1, 0, 0, 0],
                         [0, 0, 0, 1, 0, 0, 0],
                         [0, 0, 0, 1, 0, 0, 0],
                         [0, 0, 0, 1, 0, 0, 0]]
        )
        expect(game.vertical_win?(3, game.game_board)).to eql(true)
      end

      it "returns true when win on column 7" do
        game.instance_variable_set(
          :@game_board, [[0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 2],
                         [0, 0, 0, 0, 0, 0, 2],
                         [0, 0, 0, 0, 0, 0, 2],
                         [0, 0, 0, 0, 0, 0, 2],
                         [0, 0, 0, 0, 0, 0, 0]]
        )
        expect(game.vertical_win?(6, game.game_board)).to eql(true)
      end
    end

    context "when there is no vertical win" do
      it "does not return true" do
        game.instance_variable_set(
          :@game_board, [[0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 1, 0],
                         [0, 0, 0, 0, 0, 1, 0],
                         [0, 0, 0, 0, 0, 1, 0],
                         [0, 0, 0, 0, 0, 0, 0]]
        )
        expect(game.vertical_win?(5, game.game_board)).to eql(false)
      end
    end
  end

  describe "#diagonal_win_from_bottom_left?" do
    context "when there is a diagonal win" do
      it "returns true" do
        game.instance_variable_set(
          :@game_board, [[0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 1, 0],
                         [0, 0, 0, 0, 1, 0, 0],
                         [0, 0, 0, 1, 0, 0, 0],
                         [0, 0, 1, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0]]
        )
        expect(game.diagonal_win_from_bottom_left?(4, 2, game.game_board)).to eql(true)
      end
    end

    context "when there is no diagonal win" do
      it "returns false" do
        game.instance_variable_set(
          :@game_board, [[0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0]]
        )
        expect(game.diagonal_win_from_bottom_left?(1, 1, game.game_board)).to eql(false)
      end
    end
  end

  describe "#diagonal_win_from_bottom_right?" do
    context "when there is a diagonal win" do
      it "returns true" do
        game.instance_variable_set(
          :@game_board, [[0, 0, 0, 0, 0, 0, 0],
                         [0, 1, 0, 0, 0, 0, 0],
                         [0, 0, 1, 0, 0, 0, 0],
                         [0, 0, 0, 1, 0, 0, 0],
                         [0, 0, 0, 0, 1, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0]]
        )
        expect(game.diagonal_win_from_bottom_right?(2, 2, game.game_board)).to eql(true)
      end
    end

    context "when there is no diagonal win" do
      it "returns false" do
        game.instance_variable_set(
          :@game_board, [[0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0]]
        )
        expect(game.diagonal_win_from_bottom_right?(5, 5, game.game_board)).to eql(false)
      end
    end
  end
end
