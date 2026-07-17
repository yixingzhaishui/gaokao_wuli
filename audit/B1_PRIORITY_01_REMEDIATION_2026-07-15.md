# B1 物理专家审核第一优先批整改记录

> 依据：`audit/B1_physics_expert_review_2026-07-15.md`  
> 范围：B1-05、B1-06、B1-08、B1-18、B1-23、B1-24、B1-25、B1-26  
> 状态说明：本记录描述整改设计和实现进度，不替代 OpenAI Pro 物理专家复审；工程测试通过也不等于内容或教学路径通过。

```yaml
- knowledge_id: B1-05
  student_question: 全程平均速度为什么不能回答第3秒末速度？
  physics_goal: 区分平均速度、平均速率与瞬时速度的研究时间范围
  guided_demo: 前慢后快运动—全程平均—测速仪—缩短测量窗口—割线趋近切线
  prediction_prompt: 全程平均速度能代表第3秒末吗？
  core_variable: 测量时间窗口
  causal_explanation: 时间均摊会抹平过程细节，窗口缩短使短时平均更接近该时刻状态
  formula_boundary: 挡光片变窄同时影响近似误差与计时相对误差
  gaokao_transfer: 同一情境辨析平均速度、平均速率、瞬时速度
  interaction_test: 待终审时复测默认演示的暂停点与手机端操作
  content_review_status: design_spec_added_implementation_pending

- knowledge_id: B1-06
  student_question: 加速度为负为什么不一定减速？
  physics_goal: 用速度变化率和方向关系理解加速度
  guided_demo: 四种一维v-a符号组合连续演示并显示delta-v
  prediction_prompt: v小于0且a小于0时速度大小怎样变化？
  core_variable: v与a的方向关系
  causal_explanation: a的方向由delta-v决定，加速减速由v与a同异号决定
  formula_boundary: 正负号表示选定方向，不直接表示快慢变化
  gaokao_transfer: 联合读取v-t图纵坐标和斜率
  interaction_test: 待终审时复测四幕自动路径与换向暂停
  content_review_status: design_spec_added_implementation_pending

- knowledge_id: B1-08
  student_question: v-t图的面积为什么是位移而不是口诀？
  physics_goal: 从短时位移累加建立有符号面积
  guided_demo: 真实运动—速度表—描点—vDelta-t小矩形累加—越轴对比
  prediction_prompt: 横轴下方的小矩形应贡献正位移还是负位移？
  core_variable: 时间分割宽度
  causal_explanation: 很短时间内位移近似为vDelta-t，累加后得到位置净变化
  formula_boundary: 有符号面积是位移，绝对值面积之和才是路程
  gaokao_transfer: 越轴图像分别求位移和路程
  interaction_test: 待终审时复测三联动和正负面积读数
  content_review_status: design_spec_added_implementation_pending

- knowledge_id: B1-18
  student_question: 摩擦为什么有时与物体对地运动同向？
  physics_goal: 围绕接触面间相对运动或趋势重建摩擦模型
  guided_demo: 推箱未动—临界—滑动—人走路—传送带
  prediction_prompt: 去掉摩擦后两个接触面将怎样相对滑动？
  core_variable: 接触面间相对速度或相对运动趋势
  causal_explanation: 摩擦阻碍接触面间相对滑动，不是笼统阻碍物体对地运动
  formula_boundary: 静摩擦按需调节且只在临界取上限；滑动时才用mu-k-N
  gaokao_transfer: 用物块与传送带相对速度判断摩擦方向
  interaction_test: 已重构为两次结果前预测、基于dt的三幕路径、迁移情境去伪精确读数及减少动态效果分步模式；待重新生成当前提交证据
  content_review_status: implementation_updated_pending_openai_pro_retest

- knowledge_id: B1-23
  student_question: 汽车熄火后为什么会减速，运动是否需要力维持？
  physics_goal: 由阻力递减实验和理想外推建立惯性运动
  guided_demo: 粗糙面—较光滑面—近似无摩擦面连续对比
  prediction_prompt: 阻力继续减小时停车距离怎样变化？
  core_variable: 阻力大小
  causal_explanation: 阻力改变速度；合力为零时原有速度保持
  formula_boundary: 无摩擦是理想模型，第一定律不降格为第二定律代数特例
  gaokao_transfer: 由频闪图证据外推理想情形
  interaction_test: 待终审时复测三表面自动连播
  content_review_status: design_spec_added_implementation_pending

- knowledge_id: B1-24
  student_question: 怎样由实验而不是结论得到F合等于ma？
  physics_goal: 用两轮控制变量实验建立a-F合和a-1/m关系
  guided_demo: 固定质量改变合力取点—固定合力改变质量取点—归纳公式
  prediction_prompt: 合力加倍时加速度怎样变，为什么要画a-1/m图？
  core_variable: 第一轮为合力，第二轮为质量
  causal_explanation: 合力改变速度，质量衡量运动状态改变的难易
  formula_boundary: 同一时刻同一物体的合外力与加速度，方向一致
  gaokao_transfer: 用a-F外图横截距诊断未补偿阻力
  interaction_test: 已重构为预测输入、两轮逐点数据表、延迟拟合线与公式揭示，并修正粗糙面静/动摩擦模型；待重新生成当前提交证据
  content_review_status: implementation_updated_pending_openai_pro_retest

- knowledge_id: B1-25
  student_question: 等大反向的作用反作用力为什么不抵消？
  physics_goal: 用双传感器和分立受力图区分相互作用力与平衡力
  guided_demo: 同时出现—同时变化—同时消失—分入两个受力图—改变质量
  prediction_prompt: 两个力能否画在同一物体的受力图中抵消？
  core_variable: 受力物体
  causal_explanation: 两力属于同一相互作用但分别改变两个物体的运动
  formula_boundary: 第三定律只约束力的关系，不保证运动效果相同
  gaokao_transfer: 用人走路分别画人和地面的受力图
  interaction_test: 待终审时复测双传感器同步与受力图分离
  content_review_status: design_spec_added_implementation_pending

- knowledge_id: B1-26
  student_question: 电梯向上运动时为什么也可能失重？
  physics_goal: 只依据加速度方向判断视重变化
  guided_demo: 上升加速—上升减速—下降加速—下降减速—自由落体
  prediction_prompt: 上升减速时体重计读数比mg大还是小？
  core_variable: 加速度方向
  causal_explanation: 支持力与重力的差产生加速度，速度方向不决定瞬时受力差
  formula_boundary: 人与地板保持接触并具有相同加速度；完全失重是N等于0而非mg等于0
  gaokao_transfer: 由v-t图斜率判加速度后判断秤读数
  interaction_test: 待终审时复测四幕同屏信息和自由落体边界
  content_review_status: design_spec_added_implementation_pending
```

## 复审结论

- 本批所有节点继续保持 `content review pending`，未擅自标记 `content approved`。
- B1-18 与 B1-24 已根据 OpenAI Pro 复审再次更新实现，当前状态是“实现完成、证据和专家复核待更新”，不得写成内容终审完成。
- B1-05、B1-06、B1-08、B1-23、B1-25、B1-26 当前只确认教学设计已写入正文，对应动画默认路径仍待逐项实现和复审。
- 下一轮由 OpenAI Pro 物理专家检查物理语义、预测时序、术语一致性与 390 px 手机端实际操作。
