import SparkMD5 from 'spark-md5';

/**
 * 获取文件的 MD5 值
 * @param file 文件对象
 * @returns 文件的 MD5 值
 */
export async function getFileMD5(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const spark = new SparkMD5.ArrayBuffer();
        const fileReader = new FileReader();
        fileReader.onload = (e: ProgressEvent<FileReader>): void => {
            if (e.target?.result instanceof ArrayBuffer) {
                spark.append(e.target.result);
                resolve(spark.end());
            } else {
                reject(new Error('读取文件MD5值错误'));
            }
        };
        fileReader.onerror = () => {
            reject('');
        };
        fileReader.readAsArrayBuffer(file);
    });
}

/**
 * 计算 Blob 对象的 MD5 值
 * @param blob Blob 对象
 * @returns Blob 对象的 MD5 值
 */
export async function calculateBlobMD5(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target?.result instanceof ArrayBuffer) {
                const spark = new SparkMD5.ArrayBuffer();
                spark.append(e.target.result);
                const md5Value = spark.end();
                resolve(md5Value);
            } else {
                reject('读取blob对象文件MD5值错误');
            }
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
    });
}

/**
 * 计算 Base64 编码数据的 MD5 值
 * @param base64Data Base64 编码的数据
 * @returns Base64 数据的 MD5 值
 */
export async function calculateBase64MD5(base64Data: string): Promise<string> {
    return new Promise((resolve, reject) => {
        try {
            // 去除前缀
            const base64Part = removeBase64Prefix(base64Data)
            // 验证 Base64 字符串的有效性
            if (!isValidBase64(base64Part)) {
                reject(new Error('无效的 Base64 字符串'));
                return;
            }
            const binaryString = window.atob(base64Part);
            const byteNumbers = new Array<number>();
            for (let i = 0; i < binaryString.length; i++) {
                byteNumbers.push(binaryString.charCodeAt(i));
            }
            const byteArray = new Uint8Array(byteNumbers);
            const arrayBuffer = new ArrayBuffer(byteArray.byteLength);
            new Uint8Array(arrayBuffer).set(byteArray);

            const spark = new SparkMD5.ArrayBuffer();
            spark.append(arrayBuffer);
            const md5Value = spark.end();
            resolve(md5Value);
        } catch (error) {
            reject(error);
        }
    });
}
// 去除 Base64 前缀
function removeBase64Prefix(base64Data: string): string {
    const regex = /^data:[^;]+;base64,/;
    if (regex.test(base64Data)) {
        return base64Data.replace(regex, '');
    }
    return base64Data;
}
// 验证 Base64 字符串的有效性
function isValidBase64(base64Data: string): boolean {
    try {
        window.atob(base64Data);
        return true;
    } catch (error) {
        return false;
    }
}