import './widgetLg.css';
import img from "../../images/img01.jpg"

const WidgetLg = () => {
    const Button = ({type}) => {
        return <button className={'wLgButton ' + type}>{type}</button>
    }
  return (
    <div className='widgetLg'>
        <h3 className="WLTitle">Latest Transactions</h3>
        <table className="wLgTable">
            <tr className="wLgTr">
                <th className="wLgTh">Customer</th>
                <th className="wLgTh">Date</th>
                <th className="wLgTh">Amount</th>
                <th className="wLgTh">Status</th>
            </tr>
            <tr className="wLgTr">
                <td className="wLgUser">
                    <img src={img} alt="" className="wLgImg" />
                    <span className="wLgName">Gabriel</span>
                </td>
                <td className="wLgDate">12 March 2022</td>
                <td className="wLgDate">$122.00</td>
                <td className="wLgAmount">$122.00</td>
                <td className="wLgStatus">
                    <Button type='Approved' />
                </td>
            </tr>
            <tr className="wLgTr">
                <td className="wLgUser">
                    <img src={img} alt="" className="wLgImg" />
                    <span className="wLgName">Gabriel</span>
                </td>
                <td className="wLgDate">12 March 2022</td>
                <td className="wLgDate">$122.00</td>
                <td className="wLgAmount">$122.00</td>
                <td className="wLgStatus">
                    <Button type='Declined' />
                </td>
            </tr>
            <tr className="wLgTr">
                <td className="wLgUser">
                    <img src={img} alt="" className="wLgImg" />
                    <span className="wLgName">Gabriel</span>
                </td>
                <td className="wLgDate">12 March 2022</td>
                <td className="wLgDate">$122.00</td>
                <td className="wLgAmount">$122.00</td>
                <td className="wLgStatus">
                    <Button type='Pending' />
                </td>
            </tr>
            <tr className="wLgTr">
                <td className="wLgUser">
                    <img src={img} alt="" className="wLgImg" />
                    <span className="wLgName">Gabriel</span>
                </td>
                <td className="wLgDate">12 March 2022</td>
                <td className="wLgDate">$122.00</td>
                <td className="wLgAmount">$122.00</td>
                <td className="wLgStatus">
                    <Button type='Approved' />
                </td>
            </tr>
        </table>

    </div>
  )
}

export default WidgetLg