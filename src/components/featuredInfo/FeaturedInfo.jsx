import './featuredInfo.css'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featTitle">Revenue</span>
            <div className="featMoneyContainer">
                <div className="featMoney">$12.9</div>
                <div className="featMoneyRate">-11.4 <ArrowDownward className='featIcon negative'/></div>
            </div>
            <span className="featSub">Compare to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featTitle">Sales</span>
            <div className="featMoneyContainer">
                <div className="featMoney">$4,415</div>
                <div className="featMoneyRate">-1.4 <ArrowDownward className='featIcon negative'/></div>
            </div>
            <span className="featSub">Compare to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featTitle">Cost</span>
            <div className="featMoneyContainer">
                <div className="featMoney">$2,215</div>
                <div className="featMoneyRate">2.5 <ArrowUpward className='featIcon positive'/></div>
            </div>
            <span className="featSub">Compare to last Month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo