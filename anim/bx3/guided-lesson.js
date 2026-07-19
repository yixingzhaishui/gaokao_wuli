(function () {
  'use strict';

  const lessons = {
    'charge-electrification.html': {
      id: 'B3-01',
      question: '要让金属导体最终保留异号净电荷，接地后应先断开接地，还是先移开带电体？',
      observe: '先判断操作顺序。验证时页面会真实执行接地、断地和移开三个阶段。',
      options: [['disconnect', '先断开接地，再移开带电体'], ['remove', '先移开带电体，再断开接地'], ['approach', '只靠近，不需要接地']],
      correct: 'disconnect',
      actions: [
        { selector: '[data-mode="induction"]' },
        { selector: '#inductionStep', after: 100 },
        { selector: '#inductionStep', after: 100 },
        { selector: '#inductionStep', after: 100 }
      ],
      result: '必须先断开接地，再移开带电体；导体最终保留与外部带电体异号的净电荷。',
      evidence: '三个按钮阶段依次完成，最终读数显示导体 q总=-6e，外部带电体没有接触导体。',
      explanation: '若接地尚未断开就移走带电体，电子仍可经大地回流，目标净电荷不能按该流程被保留。',
      boundary: '只靠近而未接地时只是静电感应，导体总电荷仍为零。',
      transfer: '遇到感应起电顺序题，逐步检查“靠近—接地—断地—移开”，不要把静电感应等同于已经起电。'
    },
    'coulomb.html': {
      id: 'B3-02',
      question: '保持 |q₂| 和距离不变，把 q₂ 由正改为负，库仑力怎样变？',
      observe: '比较力的非负大小读数和箭头方向，不把电荷符号写进“力的大小”。',
      options: [['same-attract', '大小不变，方向改为相吸'], ['negative', '力的大小变成负数'], ['zero', '力变为零']],
      correct: 'same-attract',
      actions: [{ selector: '[data-case="opposite"]' }],
      result: '力的大小保持不变，作用方向由斥力改为引力。',
      evidence: 'q₂ 从 +2.0 μC 变为 −2.0 μC，F 仍为 5.99×10⁻³ N，状态改为“引力（异号）”。',
      explanation: 'F=k|q₁q₂|/r² 计算大小；电荷同号或异号只决定沿连线相斥或相吸。',
      boundary: '只适用于真空或空气近似中的点电荷静电作用。',
      transfer: '先用绝对值算大小，再单独画方向；多电荷问题最后做矢量合成。'
    },
    'charges-field.html': {
      id: 'B3-03',
      question: '同一位置把试探电荷从 +q 换成 −q，电场强度 E 会反向吗？',
      observe: '同时比较绿色 E 箭头和黄色受力 F 箭头。',
      options: [['e-same', 'E 不变，F 反向'], ['both-reverse', 'E 和 F 都反向'], ['both-same', 'E 和 F 都不变']],
      correct: 'e-same',
      actions: [{ selector: '[data-testq="-1"]' }],
      result: 'E 保持不变，负试探电荷所受 F 与 E 反向。',
      evidence: '试探电荷读数改为 −q，受力方向显示“反 E 方向”，场矢量仍由源电荷和位置决定。',
      explanation: 'E 是源电荷在该位置产生的场属性；F=qE 中 q 的符号只改变受力方向。',
      boundary: 'E=kQ/r² 只用于点电荷场，E=F/q 是场强定义。',
      transfer: '判断负电荷受力时先画 E，再把受力方向反向，不能反过来修改 E。'
    },
    'field-lines.html': {
      id: 'B3-04',
      question: '等量同号正电荷的中垂线上，电场方向由什么决定？',
      observe: '切换到同号双电荷，比较两侧水平分量的抵消和竖直分量的叠加。',
      options: [['symmetry', '沿中垂线，由矢量对称合成决定'], ['between', '一定从一个正电荷指向另一个'], ['trajectory', '就是任意带电粒子的轨迹']],
      correct: 'symmetry',
      actions: [{ selector: '[data-preset="like"]' }],
      result: '探针处 E 沿中垂线，方向来自两个场强矢量的对称合成。',
      evidence: '场景切为等量同种，探针方向读数从 0° 改为 −90°，画面场线切线与 E 箭头一致。',
      explanation: '两电荷在中垂线点产生的水平分量互相抵消，竖直分量同向叠加。',
      boundary: '电场线是描述场的模型，不是带电粒子的必然运动轨迹。',
      transfer: '对称电场题先找可抵消的分量，再判断剩余分量方向。'
    },
    'equipotential.html': {
      id: 'B3-05',
      question: '外力沿同一等势面缓慢移动正电荷，静电力做功是否为零？',
      observe: '切换匀强电场后，比较移动方向、电势差和功的读数。',
      options: [['zero', '为零，因为始末电势相同'], ['positive', '为正，因为发生了位移'], ['depends-length', '只由路径长度决定']],
      correct: 'zero',
      actions: [{ selector: '[data-mode="uniform"]' }, { selector: '#playBtn', after: 220 }],
      result: '沿等势面移动时 Δφ≈0，静电力做功 W≈0。',
      evidence: '匀强场的等势线与 E 垂直，状态栏保持“沿等势面巡航，W≈0”。',
      explanation: '静电力功由始末电势差决定，不由路径长度决定；沿等势面始末电势相同。',
      boundary: '“路径无关”限于静电场，时变磁场产生的感生电场一般不是保守场。',
      transfer: '看到等势面先判断 Δφ，再用 W=qU；不要因“有位移”就判断一定做功。'
    },
    'potential-difference.html': {
      id: 'B3-06',
      question: '正电荷从高电势 A 移到低电势 B，静电力做功的正负怎样判断？',
      observe: '播放 A→B，并把 UAB、q 和 WAB 三个读数对应起来。',
      options: [['positive', '做正功，电势能减少'], ['negative', '做负功，电势能增加'], ['path', '取决于路径弯曲程度']],
      correct: 'positive',
      actions: [{ selector: '#play', after: 320 }],
      result: 'UAB>0 且 q>0，因此 WAB=qUAB>0，电势能减少。',
      evidence: '演示读数给出 UAB=16.0 V、q=2.0 nC、WAB=32.0 nJ，并同步显示 A→B。',
      explanation: '静电力做功等于电势能的减少量；正电荷从高电势到低电势时电势能降低。',
      boundary: 'U=Ed 只用于匀强静电场，d 是沿电场方向的位移分量。',
      transfer: '先统一 UAB 的下标和正负，再代入 WAB=qUAB，避免只凭运动方向猜符号。'
    },
    'electric-potential-energy.html': {
      id: 'B3-07',
      question: '同一点的电势确定后，电荷改为负值会不会改变该点电势？',
      observe: '区分场的属性 φ 与电荷—场系统的电势能 Ep=qφ。',
      options: [['phi-same', 'φ 不变，Ep 随 q 的符号改变'], ['both-change', 'φ 和 Ep 都反号'], ['none', '两者都与 q 无关']],
      correct: 'phi-same',
      actions: [{ selector: '#play', after: 320 }],
      result: '位置的 φ 由源电荷决定；Ep=qφ 还取决于放入的电荷 q。',
      evidence: 'A、B 两点电势固定，动画同步显示 EpA、EpB 与电场力功的对应关系。',
      explanation: '电势是电场属性，电势能属于电荷与电场组成的系统；两者不能混为同一个量。',
      boundary: '电势零点可选，单点 Ep 数值会随零点平移，但 ΔEp 和电场力功不变。',
      transfer: '比较正负电荷电势能时先看 q 的符号，再看 φ 的高低。'
    },
    'electric-work.html': {
      id: 'B3-08',
      question: '静电场中三条不同路径连接相同始末点，电场力功是否相同？',
      observe: '播放橙色路径，同时比较三条路径的路程和功读数。',
      options: [['same', '功相同，与路径长度无关'], ['longer-more', '路径越长，功越大'], ['straight-only', '只有直线路径能计算']],
      correct: 'same',
      actions: [{ selector: '#play', after: 320 }],
      result: '三条路径的静电力功相同，虽然路径长度不同。',
      evidence: '画面列出 W₁=W₂=W₃=12.8 nJ，而所选路径长度单独显示并不进入功的结果。',
      explanation: '静电力是保守力，功只由始末电势差决定。',
      boundary: '感生电场一般不是保守场，不能把这条结论推广到任意电场。',
      transfer: '遇到静电场路径比较，先核对始末点；路径长度通常是干扰信息。'
    },
    'capacitor-lab.html': {
      id: 'B3-09',
      question: '已充电电容经电阻放电时，电压和电流会瞬间变为零吗？',
      observe: '先充电形成初态，再切换放电，观察 Uc 与 I 的连续变化。',
      options: [['decay', '不会，会按 RC 时间尺度逐渐衰减'], ['instant', '会同时瞬间变为零'], ['current-constant', '电流保持不变']],
      correct: 'decay',
      actions: [{ selector: '#charge', after: 420 }, { selector: '#discharge', after: 360 }],
      result: 'Uc 和放电电流连续衰减，不会瞬间消失。',
      evidence: '状态切换为“正在放电”，曲线、Uc、I 与电荷读数同步更新。',
      explanation: '电容器储存的电荷要经电阻转移；R 和 C 共同决定变化快慢。',
      boundary: '指数模型要求线性 R、恒定 C 和理想直流切换。',
      transfer: '比较两组 RC 曲线时先比较 τ=RC，再判断达到同一比例所需时间。'
    },
    'capacitor.html': {
      id: 'B3-10',
      question: '平行板电容器断开电源后拉大板距，电荷量 Q 会怎样？',
      observe: '切换到“断电源 Q 不变”，再播放极板远近对比。',
      options: [['q-same', 'Q 保持不变，U 随 C 改变'], ['u-same', 'U 保持不变，Q 改变'], ['both-same', 'Q 和 U 都不变']],
      correct: 'q-same',
      actions: [{ selector: '[data-mode="isolated"]' }, { selector: '#playBtn', after: 320 }],
      result: '断开电源后没有电荷交换通道，Q 保持不变，U 随 C 改变。',
      evidence: '模式切为“断电源 Q不变”，极板运动时 Q 读数保持而 d、C、U 联动。',
      explanation: '接电源时电源维持 U；断电源后孤立电容器维持 Q。',
      boundary: 'C=ε₀S/d 只用于真空或空气近似的理想平行板，填充介质用 ε。',
      transfer: '电容器动态题第一步先判断“接着电源还是已经断开”，再选不变量。'
    },
    'current.html': {
      id: 'B3-11',
      question: '稳恒电流的大小怎样与单位时间通过截面的电荷量对应？',
      observe: '重置计数后播放，比较累计 Q、时间和 I 的读数。',
      options: [['rate', 'I 表示电荷通过截面的平均速率'], ['stored', 'I 表示导线中储存的总电荷'], ['electron-speed', 'I 等于单个电子的热运动速度']],
      correct: 'rate',
      actions: [{ selector: '#reset' }, { selector: '#play-btn', after: 360 }],
      result: 'I 对应单位时间通过截面的净电荷量，累计 Q 随时间增加。',
      evidence: '播放后记录栏持续累计 Q，电流读数由载流子密度、截面积和漂移速度共同决定。',
      explanation: '电流描述电荷输运率，不是某个电子的瞬时热运动速度。',
      boundary: 'ΔQ/Δt 是一段时间平均电流；稳恒电流时才可简写为 Q/t 并代表任一时刻。',
      transfer: '微观电流题要同时检查 n、q、S、v，不能把信号传播速度当漂移速度。'
    },
    'resistance-law.html': {
      id: 'B3-12',
      question: '保持导线长度和截面积不变，把铜换成镍铬，电阻怎样变？',
      observe: '只改变材料，比较电阻和同电压下电流读数。',
      options: [['r-up', '电阻增大，电流减小'], ['r-down', '电阻减小，电流增大'], ['same', '材料不影响电阻']],
      correct: 'r-up',
      actions: [{ selector: '[data-rho="10"]' }],
      result: '电阻率增大使 R 增大，同电压下 I 减小。',
      evidence: '切换镍铬后 R 从约 0.017 Ω 增至 0.100 Ω，I 从约 1.76 A 降至 0.30 A。',
      explanation: 'R=ρL/S；控制 L、S 不变时，材料电阻率 ρ 决定变化。',
      boundary: '金属明显发热时 ρ 和 R 会随温度变化，不能继续当常量。',
      transfer: '控制变量题要写清保持 L、S、温度不变，才可比较材料。'
    },
    'ohm-law.html': {
      id: 'B3-13',
      question: '只在某个工作点算出 R=U/I，能否证明灯泡是线性元件？',
      observe: '切换灯泡模式，观察整条 I-U 曲线和工作点电阻。',
      options: [['cannot', '不能，要看多个工作点是否成直线'], ['can', '能，任一比值都能证明线性'], ['zero', '灯泡不允许计算 U/I']],
      correct: 'cannot',
      actions: [{ selector: '[data-mode="lamp"]' }],
      result: '灯泡是非线性元件，R 随工作点改变。',
      evidence: '判据改为“非线性：R 随工作点变”，画面 I-U 曲线不再是过原点直线。',
      explanation: 'R=U/I 可描述一个工作点，但欧姆定律的线性关系要求多个工作点的比值稳定。',
      boundary: '欧姆定律只适用于温度等条件稳定的线性导体。',
      transfer: '判断元件是否欧姆型要看伏安曲线整体，不要只计算一个点。'
    },
    'series-parallel.html': {
      id: 'B3-14',
      question: '同两个电阻由串联改为并联，等效电阻怎样变？',
      observe: '真实切换连接方式，比较等效电阻、总电流和支路读数。',
      options: [['smaller', '变小，且小于任一支路电阻'], ['larger', '变大，等于两电阻之和'], ['same', '连接方式不影响']],
      correct: 'smaller',
      actions: [{ selector: '[data-mode="parallel"]' }],
      result: '并联等效电阻减小，总电流增大，并出现支路分流。',
      evidence: '示例读数由串联 Req=9.00 Ω 改为并联 Req=2.00 Ω，并显示 I₁、I₂。',
      explanation: '并联增加电流通道；各支路两端电压相同，总电流为支路电流之和。',
      boundary: '是否串并联由节点连接决定，不由元件在图上是否相邻决定。',
      transfer: '复杂电路先标节点、再判断连接，最后使用等效关系。'
    },
    'joule-law.html': {
      id: 'B3-15',
      question: '电动机线圈发热时，输入电能是否全部等于焦耳热？',
      observe: '切换电动机并播放，比较 W、Q 和机械输出能。',
      options: [['w-greater', '不是，W=Q+机械输出等'], ['equal', '是，任何用电器都有 W=Q'], ['no-heat', '电动机不产生焦耳热']],
      correct: 'w-greater',
      actions: [{ selector: '[data-mode="motor"]' }, { selector: '#playBtn', after: 360 }],
      result: '电动机输入电能大于线圈焦耳热，差额转化为机械能等。',
      evidence: '电动机模式同时显示 W、Q 和输出能，满足能量分配而不是 W=Q。',
      explanation: 'Q=I²Rt 描述电阻发热；只有纯电阻用电器才把全部电功转化为热。',
      boundary: 'I²Rt 的本页模型按 I、R 近似恒定处理。',
      transfer: '非纯电阻题用 UIt 算总电功，用 I²Rt 算发热，两者不要混用。'
    },
    'closed-circuit-law.html': {
      id: 'B3-16',
      question: '含内阻电源发生短路时，路端电压和电流分别怎样？',
      observe: '点击显式 R=0 短路情境，不用有限滑块端点冒充极限。',
      options: [['u0-imax', 'U=0，I=ε/r 达到最大'], ['u-e-i0', 'U=ε，I=0'], ['both0', 'U 和 I 都为零']],
      correct: 'u0-imax',
      actions: [{ selector: '[data-case="short"]' }],
      result: '短路时外电阻 R=0，路端电压 U=0，电流 I=ε/r。',
      evidence: '显式短路按钮给出 I=6.00 A、U=0.00 V、内阻压降 Ir=6.00 V。',
      explanation: '电源电动势全部降落在内阻上；内阻限制电流但会造成强烈发热风险。',
      boundary: '断路是 I=0、U≈ε；普通有限 R 滑块端点都不等于这两个极限。',
      transfer: '闭合电路极限题分别代入 R=0 和 I=0，再检查能量与安全意义。'
    },
    'emf.html': {
      id: 'B3-17',
      question: '电源内部是什么作用把正电荷从低电势端搬回高电势端？',
      observe: '播放完整回路，区分电源内部非静电力与外电路静电力。',
      options: [['nonstatic', '非静电力做功'], ['electric-only', '只靠静电力自发上升'], ['current-creates', '电流凭空创造能量']],
      correct: 'nonstatic',
      actions: [{ selector: '#playBtn', after: 360 }],
      result: '电源内部由非静电力做功，把其他形式能转化为电能。',
      evidence: '动画显示电荷循环搬运，并同步显示 ε、I、U 与内部能量供给状态。',
      explanation: '电动势表示非静电力对单位正电荷所做的功，不等于任意工作状态的路端电压。',
      boundary: '放电 U=ε−Ir；充电 U=ε+Ir；断路或测量电流可忽略时 U≈ε。',
      transfer: '先判断电源在放电还是充电，再确定 Ir 项符号。'
    },
    'multimeter-practice-lab.html': {
      id: 'B3-18',
      question: '使用欧姆挡测电阻时，被测电路仍接通电源，能否继续读数？',
      observe: '真实把“电源接通”从否切为是，查看系统是否拒绝操作并说明原因。',
      options: [['reject', '不能，必须先断开被测电路电源'], ['allow', '能，读数照常有效'], ['range-only', '只要换大量程就安全']],
      correct: 'reject',
      actions: [{ selector: '#power', value: '1' }],
      result: '操作不通过：测电阻必须先断开被测电路电源。',
      evidence: '电源状态改为“是”，状态栏立即显示拒绝，且给出断电改法。',
      explanation: '欧姆挡内部自带电源，外部带电会破坏测量条件并可能损坏仪表。',
      boundary: '换倍率后还要重新欧姆调零；测电压并联、测电流串联。',
      transfer: '实验操作题先检查安全与接法，再谈量程和读数。'
    },
    'em-wave.html': {
      id: 'B3-19',
      question: '真空中把电磁波频率从 2.0 GHz 加倍到 4.0 GHz，波长怎样变？',
      observe: '只改变频率，比较波速、波长和振幅读数。',
      options: [['half', '波长减半，波速仍为 c'], ['double-speed', '波速加倍，波长不变'], ['double-lambda', '波长加倍']],
      correct: 'half',
      actions: [{ selector: '#freq', value: '4' }],
      result: '频率加倍，真空波长由 150 mm 变为 75 mm，波速保持 c。',
      evidence: '频率读数 2.0→4.0 GHz，波长读数 150→75 mm，强度未因频率改变而被强制改变。',
      explanation: '同一介质中 v 由介质决定，v=λf，所以 f 加倍时 λ 减半。',
      boundary: '进入介质后频率由波源保持，速度和波长随介质改变。',
      transfer: '不要把“频率更高”误判为“传播更快”；先判断介质。'
    },
    'energy-sustainability.html': {
      id: 'B3-20',
      question: '提高效率、减少化石能源占比，会不会违反能量守恒？',
      observe: '播放能源转型，比较有效能、废热、投入和碳排放。',
      options: [['no', '不会，守恒讨论总量，可持续性讨论来源与代价'], ['yes', '会，因为化石能源减少了'], ['renewable-free', '可再生能源没有任何环境代价']],
      correct: 'no',
      actions: [{ selector: '#playBtn', after: 520 }],
      result: '能量总量仍守恒；效率提高使同样服务所需投入和废热比例改变。',
      evidence: '演示中效率提高、化石能源占比和碳排下降，输入能仍与有效能和废热相平衡。',
      explanation: '能量守恒回答“总量去哪了”，可持续评价还要看资源补给、排放和生命周期。',
      boundary: '核能低碳但核燃料不可再生；可再生也不等于零环境影响。',
      transfer: 'STSE 题把守恒、效率、低碳、可再生四个维度分开判断。'
    },
    'electrostatic-induction.html': {
      id: 'B3-21',
      question: '外电场中的封闭导体达到静电平衡后，导体内部电场怎样？',
      observe: '切换静电屏蔽模式，比较表面电荷重排与内部场强。',
      options: [['zero', '内部场强约为零'], ['same', '内部场强等于外场'], ['larger', '内部场强更强']],
      correct: 'zero',
      actions: [{ selector: '[data-mode="cage"]' }],
      result: '静电平衡时导体内部场强约为零，外场由表面感应电荷抵消。',
      evidence: '模式改为“静电屏蔽”，读数明确给出导体内部电场约为 0。',
      explanation: '自由电荷会重新分布，直到导体内部合场为零；这不是外场“穿不过金属”的口号。',
      boundary: '未接地只有电荷重新分布、总电荷仍为零；含空腔内置电荷时表面分布需另行分析。',
      transfer: '静电平衡题先写内部 E=0，再由边界条件判断表面电荷。'
    },
    'household-circuit.html': {
      id: 'B3-22',
      question: '家庭电路总功率过大时，空气开关为什么应动作？',
      observe: '把总功率提高到 7.5 kW 并切换过载，观察电流和保护状态。',
      options: [['current-up', '有效值电流增大，超过保护阈值'], ['voltage-up', '家庭电压必然升高'], ['fixed80', '任何家庭短路电流都固定为 80 A']],
      correct: 'current-up',
      actions: [{ selector: '#power', value: '7500' }, { selector: '[data-mode="overload"]' }],
      result: '总功率增大使有效值电流增大，空气开关应在超过额定条件时跳闸。',
      evidence: '功率读数提高，模式为过载，状态栏显示总电流过大和空气开关动作逻辑。',
      explanation: '额定 220 V 是交流有效值，稳态估算 I=P/U；保护装置按实际回路电流和额定条件动作。',
      boundary: '短路电流由回路总阻抗决定，动画的大电流只作安全示意，不是通用定值。',
      transfer: '家庭安全题先判断火线/零线/地线和保护器，再进行功率电流估算。'
    },
    'capacitor-charge-discharge-lab.html': {
      id: 'B3-23',
      question: '保持 C 不变，把 R 从 20 kΩ 加倍到 40 kΩ，充电快慢怎样变？',
      observe: '只改变 R 并启动充电，比较时间常量和曲线变化。',
      options: [['slower', '时间常量加倍，充电更慢'], ['faster', '电阻更大，充电更快'], ['same', 'R 不影响充电过程']],
      correct: 'slower',
      actions: [{ selector: '#r', value: '40' }, { selector: '#play', after: 360 }],
      result: 'τ=RC 由 2.00 s 增至 4.00 s，达到同一比例所需时间加倍。',
      evidence: 'R 标签显示 40 kΩ，读数显示 τ=4.00 s，Uc 和 I 曲线同步变慢。',
      explanation: 'R 越大，同一电压差下电荷转移速率越小，因此 RC 过程更慢。',
      boundary: '“Uc 从 0 开始”要求初始未充电；一般初态需使用相应初值。',
      transfer: '比较 RC 曲线不要只看最终电压，先比较 τ，再找 0.632 或 0.368 特征点。'
    },
    'em-wave-applications.html': {
      id: 'B3-24',
      question: '40 km 光纤的传播延迟应使用真空光速 c，还是光在光纤中的介质速度？',
      observe: '切换光纤场景，读取速度、红外载频、波长和延迟。',
      options: [['medium', '用介质速度，约 2.0×10⁸ m/s'], ['vacuum', '始终用 3.0×10⁸ m/s'], ['bandwidth', '用带宽代替传播速度']],
      correct: 'medium',
      actions: [{ selector: '[data-mode="fiber"]' }],
      result: '光纤中用介质速度约 2.0×10⁸ m/s，40 km 单程延迟约 0.20 ms。',
      evidence: '光纤模式显示红外载频约 2×10¹⁴ Hz、λ≈1.00 μm、延迟 0.20 ms。',
      explanation: '频率由光源决定，进入介质后传播速度和波长改变。',
      boundary: '通信容量还取决于可用带宽、信噪比和调制编码，不由载频单独决定。',
      transfer: '雷达注意往返除以 2；光纤延迟先确认介质速度；容量题不要混淆载频与带宽。'
    },
    'magnetic-phenomena.html': {
      id: 'B3-25',
      question: '直导线接通电流后，旁边原本指南北的指南针会怎样？',
      observe: '真实接通电流，比较通电前后的指南针方向；随后可反向电流。',
      options: [['deflect', '发生偏转，说明电流周围存在磁场'], ['same', '仍只指南北，电流不产生磁场'], ['attract', '指南针被导线直接吸住']],
      correct: 'deflect',
      actions: [{ selector: '#currentOn' }],
      result: '指南针发生偏转，证明电流周围存在磁场。',
      evidence: '电流由 0 变为正向，指南针角度从 0° 变为 +55°，磁场环线同时出现。',
      explanation: '导线电流产生环绕导线的磁场，与地磁场叠加后改变指南针北极的静止方向。',
      boundary: '磁极不能被单独分离；把磁体截断后每段仍有南、北两极。',
      transfer: '解释扬声器、电动机等应用时要写清“电流产生磁场”或“电流与磁场相互作用”，不能只列设备名。'
    },
    'magnetic-field.html': {
      id: 'B3-26',
      question: '通电直导线与磁场平行时，仍能直接使用 F=BIL 得到非零安培力吗？',
      observe: '切换平行条件，比较夹角、力读数和方向符号。',
      options: [['zero', '不能；F=BILsinθ，平行时为零'], ['max', '能；平行时力最大'], ['along-b', '力总沿磁场方向']],
      correct: 'zero',
      actions: [{ selector: '#parallel' }],
      result: '平行时 θ=0°，安培力 F=0。',
      evidence: '夹角切到 0°，力读数变为 0.000 N，画面不再显示非零受力方向。',
      explanation: '安培力大小取决于垂直于磁场的电流分量，F=BILsinθ。',
      boundary: '磁场方向按小磁针北极指向规定，不等于导线受力方向；定量安培力属于后续深化。',
      transfer: '公式题先画 B、I 的夹角，再判断 sinθ；平行零力是重要反例。'
    },
    'magnetic-flux-induction.html': {
      id: 'B3-27',
      question: '闭合线圈中的磁通量很大但保持不变，会有持续感应电流吗？',
      observe: '先建立较大且恒定的磁通量，再查看 ΔΦ、感应电动势和电流。',
      options: [['none', '不会；需要磁通量发生变化'], ['yes-large', '会；只要 Φ 大就有电流'], ['open-same', '开路和闭路都会有同样电流']],
      correct: 'none',
      actions: [{ selector: '#constantFlux' }],
      result: '磁通量虽大但 ΔΦ=0，感应电动势和持续感应电流均为零。',
      evidence: '读数显示 Φ=0.080 Wb、ΔΦ=0、ε=0、I=0，状态明确为“磁通量恒定”。',
      explanation: '电磁感应响应磁通量的变化，不响应磁通量数值本身。',
      boundary: '磁通量变化可产生感应电动势；只有回路闭合时才形成感应电流。',
      transfer: '判断感应电流分两问：先看 ΔΦ 是否为零，再看回路是否闭合。'
    }
  };

  const motionStyle = document.createElement('style');
  motionStyle.textContent = `
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: .001ms !important; animation-iteration-count: 1 !important; transition-duration: .001ms !important; scroll-behavior: auto !important; }
    }
  `;
  document.head.appendChild(motionStyle);

  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.documentElement.dataset.b3Motion = media.matches ? 'reduce' : 'full';
  if (media.addEventListener) {
    media.addEventListener('change', event => {
      document.documentElement.dataset.b3Motion = event.matches ? 'reduce' : 'full';
    });
  }

  const file = decodeURIComponent(window.location.pathname.split('/').pop() || '');
  const config = lessons[file];
  if (!config) return;

  const canvas = document.querySelector('canvas');
  const host = document.querySelector('.panel') || document.querySelector('.wrap') || document.body;
  if (!canvas || !host) return;

  if (media.matches) pauseExistingMotion();

  const style = document.createElement('style');
  style.textContent = `
    .b3-guide{border:2px solid #2563eb;background:#eff6ff;color:#1e3a5f;border-radius:10px;padding:10px;display:grid;gap:8px;margin:0 0 10px}
    .b3-guide h2{font-size:15px;line-height:1.45;margin:0;color:#0f172a}
    .b3-guide p{font-size:12px;line-height:1.55;margin:0}
    .b3-guide-options{display:grid;grid-template-columns:1fr;gap:6px}
    .b3-guide-options button{min-height:38px;text-align:left;padding:7px 9px;background:#fff}
    .b3-guide-options button[aria-pressed="true"]{border-color:#2563eb;background:#dbeafe;color:#1e3a8a;font-weight:800}
    .b3-guide-verify{min-height:38px;background:#2563eb!important;border-color:#2563eb!important;color:#fff!important;font-weight:800}
    .b3-guide-verify:disabled{background:#94a3b8!important;border-color:#94a3b8!important;cursor:not-allowed}
    .b3-guide-feedback{border-left:4px solid #0f766e;background:#ecfdf5;padding:8px;color:#134e4a;font-size:12px;line-height:1.58}
    .b3-guide-boundary{border-top:1px dashed #5eead4;padding-top:7px;margin-top:6px!important}
    .b3-guide-transfer{border-top:1px dashed #93c5fd;padding-top:7px;margin-top:6px!important;color:#334155}
    .b3-guide-replay{min-height:36px;background:#fff!important}
    .b3-guide-motion{color:#475569;font-size:11px!important}
    .b3-guide-stage{position:relative;width:100%;min-width:0}
    .b3-guide-veil{position:absolute;inset:0;display:grid;place-items:center;background:rgba(239,246,255,.54);z-index:20;pointer-events:none;border-radius:10px}
    .b3-guide-veil span{max-width:82%;border:1px solid #60a5fa;background:rgba(255,255,255,.96);border-radius:9px;padding:9px 12px;color:#1e3a8a;font-size:13px;font-weight:800;text-align:center;line-height:1.5}
    [data-b3-guide-answer-hidden]{visibility:hidden!important}
    [data-b3-guide-locked]{display:none!important}
    @media(max-width:760px){.b3-guide{padding:9px}.b3-guide h2{font-size:14px}.b3-guide-options button{font-size:13px}}
  `;
  document.head.appendChild(style);

  const guide = document.createElement('section');
  guide.className = 'b3-guide';
  guide.dataset.b3Guide = config.id;
  guide.setAttribute('aria-label', `${config.id} 引导演示`);
  guide.innerHTML = `
    <h2>${escapeHtml(config.question)}</h2>
    <p>${escapeHtml(config.observe)}</p>
    <p class="b3-guide-motion">${media.matches ? '已启用减少动态：验证会直接进入静态证据状态。' : '先预测；验证后开放画面、读数、公式与自由探索。'}</p>
    <div class="b3-guide-options" role="group" aria-label="请选择预测"></div>
    <button class="b3-guide-verify" type="button" disabled>验证预测</button>
    <div class="b3-guide-feedback" hidden aria-live="polite"></div>
    <button class="b3-guide-replay" type="button" hidden>重新预测并重置</button>
  `;

  const task = host.querySelector('.task');
  const heading = host.querySelector('h1, h2');
  if (task) task.insertAdjacentElement('afterend', guide);
  else if (heading) heading.insertAdjacentElement('afterend', guide);
  else host.prepend(guide);

  const options = guide.querySelector('.b3-guide-options');
  const verify = guide.querySelector('.b3-guide-verify');
  const feedback = guide.querySelector('.b3-guide-feedback');
  const replay = guide.querySelector('.b3-guide-replay');
  let chosen = null;

  config.options.forEach(([value, label]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.dataset.guideChoice = value;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      chosen = { value, label };
      options.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      verify.disabled = false;
    });
    options.appendChild(button);
  });

  const stage = document.createElement('div');
  stage.className = 'b3-guide-stage';
  canvas.parentNode.insertBefore(stage, canvas);
  stage.appendChild(canvas);
  const veil = document.createElement('div');
  veil.className = 'b3-guide-veil';
  veil.innerHTML = '<span>先完成预测，再显示清晰画面、读数和公式证据</span>';
  stage.appendChild(veil);
  canvas.style.filter = 'blur(5px)';
  canvas.style.opacity = '0.34';
  canvas.style.pointerEvents = 'none';
  canvas.dataset.guideStage = 'predict';
  document.documentElement.dataset.b3GuideStage = 'predict';

  const answerNodes = [...document.querySelectorAll('.formula, .read, .readout, .chips, #readout')]
    .filter(node => !guide.contains(node));
  answerNodes.forEach(node => node.setAttribute('data-b3-guide-answer-hidden', ''));

  const controls = [...document.querySelectorAll('button, input, select, textarea')]
    .filter(node => !guide.contains(node));
  const controlStates = new Map(controls.map(node => [node, node.disabled]));
  controls.forEach(node => {
    node.disabled = true;
    node.setAttribute('data-b3-guide-locked', '');
  });

  verify.addEventListener('click', async () => {
    if (!chosen || verify.disabled) return;
    verify.disabled = true;
    options.querySelectorAll('button').forEach(button => { button.disabled = true; });
    try {
      await runActions(config.actions || []);
    } catch (error) {
      console.error(error);
      feedback.hidden = false;
      feedback.textContent = `引导演示未完成：${error.message}`;
      return;
    }
    controls.forEach(node => {
      node.disabled = controlStates.get(node);
      node.removeAttribute('data-b3-guide-locked');
    });
    answerNodes.forEach(node => node.removeAttribute('data-b3-guide-answer-hidden'));
    veil.remove();
    canvas.style.filter = '';
    canvas.style.opacity = '';
    canvas.style.pointerEvents = '';
    canvas.dataset.guideStage = 'explore';
    document.documentElement.dataset.b3GuideStage = 'explore';
    feedback.hidden = false;
    feedback.innerHTML = `
      <b>你的预测：</b>${escapeHtml(chosen.label)}<br>
      <b>实际结果：</b>${escapeHtml(config.result)}<br>
      <b>画面证据：</b>${escapeHtml(config.evidence)}<br>
      <b>为什么：</b>${escapeHtml(config.explanation)}
      <p class="b3-guide-boundary"><b>模型边界：</b>${escapeHtml(config.boundary)}</p>
      <p class="b3-guide-transfer"><b>高考迁移：</b>${escapeHtml(config.transfer)}</p>
    `;
    verify.textContent = chosen.value === config.correct ? '预测已验证：开放公式与探索' : '用证据修正预测：开放公式与探索';
    replay.hidden = false;
    guide.dispatchEvent(new CustomEvent('b3-guide-complete', { bubbles: true, detail: { id: config.id, choice: chosen.value } }));
  });

  replay.addEventListener('click', () => window.location.reload());

  async function runActions(actions) {
    for (const action of actions) {
      if (action.wait) {
        await wait(action.wait);
        continue;
      }
      const target = document.querySelector(action.selector);
      if (!target) throw new Error(`缺少动作目标 ${action.selector}`);
      target.disabled = false;
      const repeat = action.repeat || 1;
      for (let i = 0; i < repeat; i += 1) {
        if (Object.prototype.hasOwnProperty.call(action, 'value')) {
          target.value = action.value;
          target.dispatchEvent(new Event('input', { bubbles: true }));
          target.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
          target.click();
        }
        await wait(action.after || 80);
      }
    }
  }

  function pauseExistingMotion() {
    const candidates = [...document.querySelectorAll('#play-btn, #playBtn, #play')];
    const running = candidates.find(button => /暂停/.test(button.textContent || ''));
    if (running) running.click();
  }

  function wait(ms) {
    if (media.matches) return Promise.resolve();
    return new Promise(resolve => window.setTimeout(resolve, ms));
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  }
})();
