const skill = require("@atomist/skill");

const onNewChatUser = async ctx => {
    const screenName = ctx.data.ChatId[0].screenName;
    await ctx.message.send({
        text: `Welcome to the atomist-community Slack workspace`,
    }, {users: [screenName]});
};

exports.handler = skill.entryPoint({
    onNewChatUser,
});
