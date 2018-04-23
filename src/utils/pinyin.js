/*
 * @Author: zuhong.wu 
 * @Date: 2018-04-02 15:26:24 
 * @Last Modified by: zuhong.wu
 * @Last Modified time: 2018-04-02 15:42:02
 */
'use strict';

/**
 * 汉字转成拼音
 */

import PinyinHelper from 'pinyin4js';

export default class PinYin {
    //获取汉字字符串的全拼
    static getAll(param){
        return PinyinHelper.convertToPinyinString(param, '#', PinyinFormat.WITH_TONE_MARK)
    }

    //获取汉字字符串的首个汉字的首个拼音字母，并将其转换为大写
    static getFirstLetter(param){
        return PinyinHelper.getShortPinyin(param).split('')[0].toUpperCase();
    }
}