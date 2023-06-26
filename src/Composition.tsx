import { CSSProperties } from 'react'

import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from 'remotion'

import ReactMarkdown from 'react-markdown'

interface Slice { content: string; duration?: number; }

const DURATION_DEFAULT = 50

const slides: Slice[] = [{content: '# Slide 1 \n Hello world ', duration: 80}, {content: '# Slide 2'}]

const containerOptions: CSSProperties = {position: 'relative', margin: '40px', fontSize: '3em', justifyContent: 'center', alignItems: 'center'}

const slideFrom = (i: number) => slides.reduce((s, c, j) => (i > j) ? s + (c.duration! ?? DURATION_DEFAULT) : s, 0) ?? 0

const Slide: React.FC<{text: string}> = ({text}) => {
	const frame = useCurrentFrame()
	const opacity = interpolate(frame, [0, 30], [0, 1])
	return (
		<div style={{opacity}}>
			<ReactMarkdown>{text}</ReactMarkdown>
		</div>
	)
}

const Component: React.FC = () => {
	return (
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			{slides.map((slide: Slice, i: number) => {
				const duration = slide.duration ?? DURATION_DEFAULT
				return (
					<Sequence key={i} from={slideFrom(i)} durationInFrames={duration} style={containerOptions}>
						<Slide text={slide.content}/>
					</Sequence>
					)
				}
			)}
		</AbsoluteFill>
	)
}
export { Component }
