const { prompt } = require("enquirer");
const { Confirm } = require("enquirer");

exports.text = async (message) => {
      const response = await prompt({
        type: "input",
        name: "inpt",
        message: message
      })
      return response.inpt;
    }
exports.confirm = async  (message) => {
    const prompt = new Confirm({
      name: "question",
      message: message
    });

    answer = await prompt.run();
    return answer;
  }