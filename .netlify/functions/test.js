exports.handler = async function(event, context) {
  console.log(event);
  console.log(context);
  console.log(process.env);
  return {
    statusCode: 200,
    body: JSON.stringify({ event, context, process_env: process.env })
  };
};
