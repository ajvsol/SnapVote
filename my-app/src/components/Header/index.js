import './index.css';
import CountdownTimer from '../CountdownTimer/index';
import PageHeader from '../PageHeader/index';
import UsernameIndicator from '../UsernameIndicator/index';

export default function Header({pageType, decisionTitle}) {
    return (<div className='header-component'>
        <CountdownTimer pageType={pageType} />
        <PageHeader pageType={pageType} decisionTitle={decisionTitle} />
        <UsernameIndicator pageType={pageType} />
    </div>)
}