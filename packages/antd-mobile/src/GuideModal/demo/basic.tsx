import * as React from 'react'
import { unstable_GuideModal as GuideModal } from '@ant-design/mobile'
import Page from './Page'

const { Step } = GuideModal

const NewUserGuide = () => (
  <div className="guide">
    <GuideModal
      className="basic-guide-modal"
      outStepEleIds={['headerImgArea', 'stepCardArea']}
      fatigue={100000}
      storageKey="DEFAULT_GUIDE_MODEL"
      showSkip
      onChange={console.log}
      onMaskPress={({ next, skip }) => {
        next()
      }}
    >
      <Step>
        <div className="top-img">
          <img src="https://gw.alipayobjects.com/mdn/rms_2cf5b1/afts/img/A*DRWiTa03CvwAAAAAAAAAAABkARQnAQ" />
        </div>
        <div className="top guide-desc">
          <div>
            <span className="blue">运动</span>联合
            <span className="yellow">相互宝</span>
          </div>
          <div>送你健康保障福利</div>
        </div>
      </Step>
      <Step>
        <div className="bottom-img">
          <img src="https://gw.alipayobjects.com/mdn/rms_2cf5b1/afts/img/A*DRWiTa03CvwAAAAAAAAAAABkARQnAQ" />
        </div>
        <div className="bottom guide-desc">
          <div>
            每天走路领保额，每天最高领<span className="yellow">50元</span>
          </div>
          <div>保障100种重大疾病</div>
        </div>
      </Step>
    </GuideModal>
  </div>
)
export default (props: React.Props<{}>) => {
  return (
    <Page>
      <NewUserGuide />
    </Page>
  )
}
