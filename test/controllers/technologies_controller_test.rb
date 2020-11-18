require 'test_helper'

class TechnologiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @technology = technologies(:one)
  end

  test "should get index" do
    get technologies_url, as: :json
    assert_response :success
  end

  test "should create technology" do
    assert_difference('Technology.count') do
      post technologies_url, params: { technology: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show technology" do
    get technology_url(@technology), as: :json
    assert_response :success
  end

  test "should update technology" do
    patch technology_url(@technology), params: { technology: {  } }, as: :json
    assert_response 200
  end

  test "should destroy technology" do
    assert_difference('Technology.count', -1) do
      delete technology_url(@technology), as: :json
    end

    assert_response 204
  end
end
