exports.handler = async function(event, context) {
  console.log(event);
  console.log(context);
  const testEnvVar = test_env_var ? test_env_var : "None";
  return {
    statusCode: 200,
    body: JSON.stringify({ event, context, testEnvVar })
  };
};
