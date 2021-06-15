import "./featuredInfo.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4
                        <ArrowDownwardIcon className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">
                        compared to the last month
                </span>
             </div>
             <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4
                        <ArrowDownwardIcon className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">
                        compared to the last month
                </span>
             </div>
             <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -11.4
                        <ArrowUpwardIcon className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">
                        compared to the last month
                </span>
             </div>
        </div>
    )
}
