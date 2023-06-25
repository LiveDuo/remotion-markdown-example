import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from 'remotion'

import ReactMarkdown from 'react-markdown'

const slides = ['# Slide 1 \n Hello world ', '# Slide 2']

const Slide: React.FC<{text: string}> = ({text}) => {
	const frame = useCurrentFrame()
	const opacity = interpolate(frame, [0, 10], [0, 1])
	return (
		<div style={{opacity}}>
			<ReactMarkdown>{text}</ReactMarkdown>
		</div>
	)
}

const HelloWorld: React.FC = () => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			{slides.map((text: string, i: number) => 
				<Sequence from={i * 50} durationInFrames={50} style={{position: 'relative', margin: '40px', fontSize: '3em'}}>
					<Slide text={text}/>
				</Sequence>
			)}
		</AbsoluteFill>
	)
}
export { HelloWorld }
