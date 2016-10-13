/* eslint comma-dangle:0 */
/**
 * data for ListView.IndexedList
 */
let data = [{
  value: '11',
  label: '北京市',
  spell: 'BeiJingShi'
}, {
  value: '12',
  label: '天津市',
  spell: 'TianJinShi'
}, {
  value: '13',
  label: '河北省',
  spell: 'HeBeiSheng'
}, {
  value: '14',
  label: '山西省',
  spell: 'ShanXiSheng'
}, {
  value: '15',
  label: '内蒙古自治区',
  spell: 'NeiMengGuZiZhiQu'
}, {
  value: '21',
  label: '辽宁省',
  spell: 'LiaoNingSheng'
}, {
  value: '22',
  label: '吉林省',
  spell: 'JiLinSheng'
}, {
  value: '23',
  label: '黑龙江省',
  spell: 'HeiLongJiangSheng'
}, {
  value: '31',
  label: '上海市',
  spell: 'ShangHaiShi'
}, {
  value: '32',
  label: '江苏省',
  spell: 'JiangSuSheng'
}, {
  value: '33',
  label: '浙江省',
  spell: 'ZheJiangSheng'
}, {
  value: '34',
  label: '安徽省',
  spell: 'AnHuiSheng'
}, {
  value: '35',
  label: '福建省',
  spell: 'FuJianSheng'
}, {
  value: '36',
  label: '江西省',
  spell: 'JiangXiSheng'
}, {
  value: '37',
  label: '山东省',
  spell: 'ShanDongSheng'
}, {
  value: '41',
  label: '河南省',
  spell: 'HeNanSheng'
}, {
  value: '42',
  label: '湖北省',
  spell: 'HuBeiSheng'
}, {
  value: '43',
  label: '湖南省',
  spell: 'HuNanSheng'
}, {
  value: '44',
  label: '广东省',
  spell: 'GuangDongSheng'
}, {
  value: '45',
  label: '广西壮族自治区',
  spell: 'GuangXiZhuangZuZiZhiQu'
}, {
  value: '46',
  label: '海南省',
  spell: 'HaiNanSheng'
}, {
  value: '50',
  label: '重庆市',
  spell: 'ChongQingShi'
}, {
  value: '51',
  label: '四川省',
  spell: 'SiChuanSheng'
}, {
  value: '52',
  label: '贵州省',
  spell: 'GuiZhouSheng'
}, {
  value: '53',
  label: '云南省',
  spell: 'YunNanSheng'
}, {
  value: '54',
  label: '西藏自治区',
  spell: 'XiCangZiZhiQu'
}, {
  value: '61',
  label: '陕西省',
  spell: 'ShanXiSheng'
}, {
  value: '62',
  label: '甘肃省',
  spell: 'GanSuSheng'
}, {
  value: '63',
  label: '青海省',
  spell: 'QingHaiSheng'
}, {
  value: '64',
  label: '宁夏回族自治区',
  spell: 'NingXiaHuiZuZiZhiQu'
}, {
  value: '65',
  label: '新疆维吾尔自治区',
  spell: 'XinJiangWeiWuErZiZhiQu'
}];

// make more data
// console.log(data.length);
let cloneData = [];
Array.from(new Array(10), (x,i) => i).forEach(j => cloneData = cloneData.concat(data.map(i => ({
  value: `${i.value + j}`,
  label: `${i.label + j}`,
  spell: `${i.spell + j}`
}))));
// console.log(cloneData);
data = data.concat(cloneData);

data.sort((a, b) => {
  return a.spell.localeCompare(b.spell);
});
const transData = {};
data.forEach((item) => {
  item.QF = item.spell[0].toUpperCase();
  transData[item.QF] = transData[item.QF] || [];
  transData[item.QF].push(item);
});

export default transData;
