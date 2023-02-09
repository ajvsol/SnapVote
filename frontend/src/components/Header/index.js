import './index.css';
import PageHeader from '../PageHeader/index';

export default function Header({pageType, decisionTitle}) {
    return <div className='header-component' data-testid='header-component'>
        <PageHeader pageType={pageType} decisionTitle={decisionTitle} />
    </div>
}