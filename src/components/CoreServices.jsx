// CoreServices.jsx
import React from 'react';

const CoreServices = () => {
const cardStyle = {
flex: '1 1 0',
padding: 24,
position: 'relative',
backgroundColor: '#09090B',
overflow: 'hidden',
borderRadius: 12,
border: '1px solid #27272A',
display: 'flex',
flexDirection: 'column',
justifyContent: 'flex-start',
alignItems: 'flex-start',
gap: 64,
};

const heading = {
textAlign: 'center',
color: '#2563EB',
fontSize: 16,
fontFamily: 'Inter',
fontWeight: 600,
lineHeight: '24px',
};

const title = {
alignSelf: 'stretch',
textAlign: 'center',
color: '#FAFAFA',
fontSize: 36,
fontFamily: 'Inter',
fontWeight: 700,
lineHeight: '40px',
};

const subtitle = {
alignSelf: 'stretch',
textAlign: 'center',
color: '#A1A1AA',
fontSize: 16,
fontFamily: 'Inter',
fontWeight: 400,
lineHeight: '24px',
};

const learnMore = {
color: '#2563EB',
fontSize: 14,
fontWeight: 500,
display: 'flex',
alignItems: 'center',
gap: 8,
cursor: 'pointer',
};

return (
<div
style={{
width: '100%',
padding: '96px 80px',
backgroundColor: '#09090B',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
gap: 24,
}}
>
<div
style={{
width: '100%',
maxWidth: 1280,
padding: '0 24px',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
gap: 64,
}}
>
<div
style={{
maxWidth: 576,
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
gap: 20,
}}
>
<div style={heading}>Core Services</div>
<div style={title}>
Fully automated account management. No hassle.
</div>
<div style={subtitle}>
We handle the trading. You define your goals.
</div>
</div>

<div
style={{
display: 'flex',
gap: 24,
width: '100%',
alignItems: 'flex-start',
justifyContent: 'center',
}}
>
{[
{
title: 'Algorithmic account management',
desc: `We manage accounts on brokers or prop firms using our proprietary algorithms.\nFully automated—no action required on your part.`,
img:"/Bot.png"
},
{
title: 'High-performance exclusive algorithms',
desc: `Audited and optimized strategies designed to operate in top-tier trading`,
img:"/Data graph 1.png"
},
{
title: 'Custom-built trading robots',
desc: `Already have a strategy? We turn it into a functional robot (MT4, MT5 or cTrader).`,
img:"/Bot Add.png"
},
].map(({ title, desc, img }, idx) => (
<div key={idx} style={cardStyle}>
<img src={img} style={{ width: 48, height: 48, borderRadius: 8 }} />
<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
<div
style={{
color: '#FAFAFA',
fontSize: 20,
fontWeight: 500,
lineHeight: '28px',
}}
>
{title}
</div>
<div
style={{
color: '#A1A1AA',
fontSize: 16,
fontWeight: 400,
lineHeight: '24px',
}}
>
{desc}
</div>
</div>
<div style={learnMore}>
Learn more <span style={{ fontSize: 18 }}>{'→'}</span>
</div>
</div>
</div>
))}
</div>
</div>
</div>
);
};

export default CoreServices;