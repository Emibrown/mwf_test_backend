import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');

class Utils {
    
    async  asyncForEach<T>(array: Array<T>, callback: (item: T, index: number) => void) {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], index);
        }
    }

}

export default new Utils();