exports.handler = async ctx => {
    const screenName = ctx.data.ChatId[0].screenName;
    await ctx.message.send({
        text: `Welcome to atomist-community`,
    }, {users: [screenName]});
};
