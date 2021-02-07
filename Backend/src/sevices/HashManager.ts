import * as bcrypt from 'bcryptjs';

export default class HashManager {

    public hash = async(text: string): Promise<string> => {
        const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_ROUNDS));
        const cipherText = await bcrypt.hash(text, salt);

        return cipherText;
    }

    public compare = async(text: string, 
        cipherText: string): Promise<boolean> => {
            const result = await bcrypt.compare(text, cipherText);

            return result;
        }
}