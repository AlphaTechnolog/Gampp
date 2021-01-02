/**
 * Realize a if with a shortcut
 * @example (async () => {
 *              const ok = true;
 *              await $pif(ok === true);
 *              console.log('ok is true');
 *          })();
 * @description This is a shortcut to if (ok === true) { ... }
 * @param {boolean} condition The condition.
 * @returns {Promise<boolean>}
 */
export const $pif = (condition) => {
    return new Promise((resolve) => {
        if (condition) {
            resolve();
        }
    });
}