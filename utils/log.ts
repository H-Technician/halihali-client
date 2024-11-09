export function init(){
    console.log(`%c${makeMulti(string)}`, 'white-space: pre; width: 679px; height: 300px; color: #00AEEC;');
    console.log('%cVersion%c1.0.0', 
        "padding: 3px; color: white;  background: #023047; border-radius: 3px 0 0 3px; font-family: 'HarmonyOS_Sans_SC_Medium';", 
        "padding: 3px; color: white; background: #219EBC; border-radius: 0 3px 3px 0; font-family: 'HarmonyOS_Sans_SC_Medium';"
    );
};
function makeMulti(string: string) {
    // 确保输入的是一个字符串
    let str = string.toString();
    
    // 查找多行注释的开始和结束位置
    const start = str.indexOf("/*");
    const end = str.lastIndexOf("*/");
    
    // 如果找到了多行注释，则提取注释内容
    if (start !== -1 && end !== -1) {
        // 提取注释内容，并去除首尾空格
        return str.substring(start + 2, end).trim();
    }
    
    // 如果没有找到多行注释，返回空字符串
    return "";
}

// 多行字符串定义
const string = `
/*
 ___  ___  ________  ___       ___  ___  ___  ________  ___       ___     
|\\  \\|\\  \\|\\   __  \\|\\  \\     |\\  \\|\\  \\|\\  \\|\\   __  \\|\\  \\     |\\  \\    
\\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\    \\ \\  \\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\    \\ \\  \\   
 \\ \\   __  \\ \\   __  \\ \\  \\    \\ \\  \\ \\   __  \\ \\   __  \\ \\  \\    \\ \\  \\  
  \\ \\  \\ \\  \\ \\  \\ \\  \\ \\  \\____\\ \\  \\ \\  \\ \\  \\ \\  \\ \\  \\ \\  \\____\\ \\  \\ 
   \\ \\__\\ \\__\\ \\__\\ \\__\\ \\_______\\ \\__\\ \\__\\ \\__\\ \\__\\ \\__\\ \\_______\\ \\__\\
    \\|__|\\|__|\\|__|\\|__|\\|_______|\\|__|\\|__|\\|__|\\|__|\\|__|\\|_______|\\|__|@hl·1.0.0
                                                                          
                                                                          
                                                                          
*/
`;


