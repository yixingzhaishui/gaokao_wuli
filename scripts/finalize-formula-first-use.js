/* Move each node's formula boundary card immediately before its first formula and expand its local condition basis. */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const idMap = JSON.parse(fs.readFileSync(path.join(root, 'data/id-map.json'), 'utf8'));
const manifestPath = path.join(root, 'data/editorial-review.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const conditionOverrides = {
  'B1-31': '量纲运算只允许同量纲量相加减，等式两侧量纲必须一致；代入前统一单位；量纲正确只是必要条件，不能单独证明物理关系正确',
  'B1-03': '任何过程计算都使用时间间隔 Δt；“某秒末”通常表示时刻，“某秒内、前几秒、从几秒到几秒”表示时间间隔；计时起点不为零时先作末时刻减初时刻',
  'B2-25': '在惯性系中只写真实相互作用力；离心力只作为旋转参考系中的惯性力使用；临界转速关系必须同时满足具体接触、摩擦和半径条件',
  'B2-26': '宇宙速度按理想球形天体、忽略大气阻力与天体自转处理；速度均相对天体中心惯性系；改变发射位置或计入自转时需重列能量和角动量关系',
  'B2-27': '牛顿力学适用于宏观、低速且弱引力场情形；接近光速时使用相对论能量和动量关系；强引力或宇宙学尺度结论不得由经典公式直接外推',
  'B2-22': '合力总功等于动能变化，只能针对同一研究对象和同一过程；重力功等于重力势能减少只适用于重力做功；其他功能关系必须先确定系统边界和非保守力做功',
  'B3-01': '电荷代数和守恒以选定封闭系统为对象；q=ne 中 n 为整数、e 为元电荷；摩擦起电只发生电荷转移，不产生净电荷',
  'B3-05': '等势面上任意两点电势差为零；静电场中电场线与等势面正交；W=qU 的正负必须同时使用电荷符号和规定的始末点',
  'B3-07': '电势能等于电荷量与所在点电势的乘积，但数值依赖零电势面选择；真正与做功直接对应的是电势能变化；正负电荷移动时必须保留电荷符号',
  'B3-21': '静电感应结论针对导体达到静电平衡后的状态；导体内部场强为零、净电荷分布在表面；接地、断地和移走带电体的操作顺序会改变结果',
  'B3-22': '家庭电路按额定交流电压和正确火线、零线、保护接地连接分析；P=UI 用于相应稳态用电器，电能计算还需明确时间和计费单位；安全操作优先于计算',
  'B3-23': '指数充放电和时间常量 τ=RC 只用于线性电阻、恒定电容和理想直流阶跃的 RC 电路；电流方向按预先约定；测量仪表内阻不可忽略时需修正模型',
  'B3-24': '真空中电磁波速率取 c，满足 c=λf；进入介质时频率由波源决定而保持不变，传播速度和波长随介质改变；通信结论还受带宽、衰减和噪声限制',
  'B3-26': '磁感应强度方向按小磁针北极受力方向规定；用 B=F/(IL) 定量定义时要求直导线有效长度 L 与磁场垂直，且试探电流不显著改变原磁场',
  'B3-27': 'Φ=BS cosθ 只用于匀强磁场和平面线圈，θ 是磁场与面积法线夹角；产生感应电流还要求闭合回路且磁通量发生变化',
  'X1-01': '动量 p=mv 使用所选惯性参考系中的速度，方向与速度一致；系统动量比较必须始终使用同一参考系和统一正方向',
  'X1-02': '恒力冲量 I=FΔt 只用于力在时段内恒定；变力冲量应由 F-t 图有符号面积或积分得到；方向按选定正方向处理',
  'X1-03': '动量定理作用于明确研究对象和时间段，合外力冲量等于该对象动量变化；变质量系统或参考系改变时不能直接套用固定质量形式',
  'X1-05': '一维弹性碰撞同时满足系统动量守恒和总动能守恒，系统在碰撞短时内合外力冲量可忽略；二维碰撞必须分方向列动量方程',
  'X1-06': '非弹性碰撞只保证隔离系统总动量守恒，机械能一般不守恒；完全非弹性碰撞还要求碰后共同速度，损失机械能转化为内能等形式',
  'X1-07': '反冲和爆炸模型要求过程短暂、系统合外力冲量相对内力冲量可忽略；动量守恒针对完整系统，不能只取其中一个物体',
  'X1-08': '简谐运动要求回复力或加速度与相对平衡位置位移成正比且方向相反；x、v、a 的相位关系使用同一正方向和时间原点',
  'X1-09': '单摆周期 T=2π√(l/g) 只适用于小角度、细线轻且不可伸长、摆球可视为质点并忽略阻力；l 为悬点到摆球质心距离',
  'X1-10': '简谐运动图像以相对平衡位置的位移为纵轴；斜率表示速度；由图读周期、振幅和相位时必须先确认坐标轴、单位和初相约定',
  'X1-11': '阻尼振动振幅随时间衰减但周期是否近似不变取决于弱阻尼条件；机械能减少是阻力做负功的结果，不能套用无阻尼简谐运动的恒振幅关系',
  'X1-12': '稳定受迫振动频率等于驱动力频率；共振峰位置和宽度取决于固有频率与阻尼；只有弱阻尼附近才能把最大振幅简单对应驱动频率等于固有频率',
  'X1-20': '全反射只在光从光密介质射向光疏介质且入射角 i>C 时发生；i=C 为折射光沿界面传播的临界状态；sinC=n₂/n₁ 要求 n₁>n₂',
  'X1-25': '反射定律角度均相对法线；折射定律 n₁sin i=n₂sin r 适用于各向同性介质界面的几何光学；频率跨界面不变，速度和波长可变',
  'X1-26': '小角度近似 r≈Lθ 中 θ 必须是光束半发散角并用弧度；若题目给全角应先除以二；实际光斑还受初始束腰和传播介质影响',
  'X1-27': '光纤导光要求纤芯折射率大于包层且界面入射角满足 i>C；数值孔径关系使用指定外界介质和阶跃型光纤近似；弯曲过大会破坏全反射条件',
  'X2-13': '互感关系建立在线性介质、线圈几何和耦合不随时间突变的近似下；感应电动势方向由楞次定律判断，符号取决于线圈绕向和参考方向',
  'X2-19': '涡流只在导体内磁通量变化时产生；阻尼与驱动方向必须按楞次定律结合相对运动判断；忽略集肤效应和材料非线性时才能使用简单定性模型',
  'X2-20': '理想 LC 振荡要求忽略电阻和辐射损耗，L、C 恒定；电场能与磁场能之和守恒；实际电路存在阻尼时振幅衰减',
  'X2-21': '位移电流和变化电磁场的结论用于时变场；静态电场或磁场不能据此推出自发传播；定量麦克斯韦方程超出本节点核心要求',
  'X2-22': '电磁波由加速电荷或变化电流辐射，远场传播结论不能直接用于天线近场；接收需要频率匹配和调谐，传播还受介质、衍射、反射与衰减影响',
  'X2-23': '电磁波谱按真空频率或波长比较，满足 c=λf；不同波段边界是约定范围；进入介质后频率不变，不能仍用真空波长描述介质内传播距离',
  'X2-24': '发电机和电动机分析必须写清能量输入、输出与损耗；E=BLv 要求有效导体切割匀强磁场且几何互相垂直；反电动势方向服从楞次定律',
  'X3-15': '能量守恒针对边界明确的封闭系统；机械能不守恒不等于总能量不守恒；热、功和内能的正负按统一系统约定处理',
  'X3-13': '热力学第一定律只用于边界明确的热力学系统；本页规定 W 为外界对系统做功，吸热 Q 为正；若题目采用气体对外做功为正，必须先转换符号约定',
  'X3-16': '热机效率必须区分从高温热源吸收的热量和向低温热源放出的热量；循环结束系统内能回到初值；涉及卡诺效率时温度必须使用开尔文',
  'X3-33': '分子速率分布是大量分子的统计规律，曲线面积表示粒子数比例并按同一温度和粒子质量比较；不能用单个分子速度解释峰值移动',
  'X3-36': '毛细上升近似要求细管均匀、液体润湿关系稳定并达到静力平衡；高度关系还取决于表面张力、接触角、液体密度和管半径',
  'X3-37': '放射性活度和半衰期关系针对大量同种核素的统计衰变；单个原子核衰变时刻不可预测；医学和示踪应用必须同时考虑剂量、防护和生物清除',
  'X3-28': '质能关系中的质量差必须取反应前后各粒子总静止质量之差；使用每原子质量单位对应 931.5 MeV 的换算时质量单位必须是 u；正质量亏损对应释放能量',
  'G-01': '图像斜率必须用割线 Δy/Δx 或切线导数，y/x 只用于过原点正比例；面积必须结合横纵轴物理量、方向和符号约定解释；截距先由模型判定',
  'G-05': '电路实验先满足电表量程和安全，再优化偏转精度；内外接选择依据电表内阻与待测电阻的相对误差；任何近似均需写明仪表模型',
  'G-07': '多过程问题必须逐段确定研究对象、受力、约束和状态衔接；上一过程末状态是下一过程初状态；跨过程守恒关系只能用于所选系统和适用时段',
  'G-09': '电磁感应综合题先判断磁通量变化和感应方向，再在指定匀强场、有效长度及电路模型下列 E、I、安培力和能量关系；几何改变时重新求有效量',
  'G-10': '复合场中必须分别写电场力和洛伦兹力方向；速度选择器要求两力反向且 qE=qvB；磁场圆周运动还要求速度垂直磁场且其他力可忽略',
  'G-12': '科技信息题只使用材料明确给出的模型、数据和适用范围；先完成单位换算和数量级检查；类比关系必须说明对应量，不能把背景宣传语当作物理条件',
  'M-06': '最高点最小速度等于 √(gr) 只适用于轻绳或内轨道恰好不松弛、不脱离的边界；轻杆或圆管可以提供双向约束，必须重新判断最高点约束力方向',
  'M-12': '有效值等于峰值除以 √2 只适用于正弦交流；理想变压器忽略铜损、铁损和漏磁且只处理交流；实际输电还要计入线路电阻和功率损耗'
};

function strip(text) {
  return text.replace(/<[^>]+>/g, ' ').replace(/\$|\*|`/g, '').replace(/^[-|]\s*/gm, '').replace(/\s+/g, ' ').trim();
}

function conditionLine(text) {
  if (!text.trim() || /---/.test(text)) return '';
  if (text.includes('|')) {
    const cells = text.split('|').map(strip).filter(Boolean);
    if (!cells.length || cells.every(cell => /^(能用|不能用或需重做|题型|说明|变量|公式|结论)$/.test(cell))) return '';
    return cells.join('：').replace(/[。；，]+$/, '');
  }
  const value = strip(text);
  if (!value || /^(题型|说明|变量|公式|图中对应|结论)$/.test(value)) return '';
  return value.replace(/[。；，]+$/, '');
}

function localConditions(id, block, template) {
  if (conditionOverrides[id]) return conditionOverrides[id];
  const candidates = [
    /\*\*(?:适用边界|模型失效边界)。\*\*\s*\n([\s\S]*?)(?=\n(?:####|\*\*)\s|\n<h4\b)/,
    /#### (?:模型假设与识别条件|原理、变量、单位与适用条件|定量关系、变量、单位与边界|不确定度、失效情形与改进)\s*\n([\s\S]*?)(?=\n####\s|\n<h4\b)/
  ];
  for (const re of candidates) {
    const m = re.exec(block);
    if (!m) continue;
    const lines = m[1].split('\n').map(conditionLine).filter(Boolean);
    const selected = lines.slice(0, 3).join('；');
    if (selected) return selected.slice(0, 420).replace(/[。；，]+$/, '');
  }
  if (template === 'experiment') return '只在本实验规定的装置、量程、接线、控制变量和仪器工作范围内使用；原始数据先统一单位，图像斜率和截距必须由实验模型解释';
  if (template === 'model') return '只在本节点列出的研究对象、受力假设和约束方程成立时使用；先规定正方向，再用代数符号解释方向；模型改变时必须重新列式';
  if (template === 'stse-extension') return '先明确系统边界、时间尺度以及运行阶段或生命周期口径；定量关系只在本节点假设内成立，不得脱离证据外推';
  return '只在本节点定义的研究对象、参考系、过程和近似成立时使用；矢量先规定正方向；模型、过程或约束改变时必须重新列式';
}

function firstFormulaIndex(block) {
  const indices = [];
  const math = /\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g;
  let m;
  while ((m = math.exec(block))) indices.push(m.index);
  const code = /```text\n([\s\S]*?)```/g;
  while ((m = code.exec(block))) if (/=|≤|≥|≈/.test(m[1])) indices.push(m.index);
  return indices.length ? Math.min(...indices) : -1;
}

const byFile = {};
for (const [id, meta] of Object.entries(idMap)) (byFile[meta.file] ??= []).push({ id, ...meta });

for (const [file, nodes] of Object.entries(byFile)) {
  const full = path.join(root, `${file}.md`);
  let text = fs.readFileSync(full, 'utf8');
  const positions = nodes.map(node => {
    const re = new RegExp(`<h4\\b[^>]*\\bid=["']${node.slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`);
    const match = re.exec(text);
    if (!match) throw new Error(`Missing node ${node.id}`);
    return { ...node, start: match.index };
  }).sort((a, b) => a.start - b.start);

  for (let i = positions.length - 1; i >= 0; i--) {
    const node = positions[i];
    const end = i + 1 < positions.length ? positions[i + 1].start : text.length;
    let block = text.slice(node.start, end);
    block = block.replace(/\n?> \*\*公式首次使用卡\*\*：[^\n]*\n?/g, '\n');
    const first = firstFormulaIndex(block);
    const record = manifest.nodes[node.id];
    if (first >= 0) {
      const condition = localConditions(node.id, block, record.template);
      const lineStart = block.lastIndexOf('\n', first) + 1;
      const card = `> **公式首次使用卡**：适用边界——${condition}。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。\n\n`;
      block = block.slice(0, lineStart) + card + block.slice(lineStart);
      record.formula_card = true;
      record.first_use_reviewed = true;
      record.condition_basis = condition;
      record.formula_card_distance_chars = first - lineStart + card.length;
    } else {
      record.formula_card = false;
      record.first_use_reviewed = 'not_applicable';
      record.formula_card_distance_chars = null;
    }
    text = text.slice(0, node.start) + block + text.slice(end);
  }
  fs.writeFileSync(full, text);
}

fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log('Moved formula cards directly before the first formula in every applicable node.');
