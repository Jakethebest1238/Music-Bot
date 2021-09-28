module.exports = async (client, thread) => {
    if(thread.joinable){
        try{
            await thread.join();
        }catch (e){
            console.log(e)
        }
    }
}
/**
 * @INFO
 * Bot Coded by Jake He#9816 | https://dsc.gg/jakesnation
 * @INFO
 */
