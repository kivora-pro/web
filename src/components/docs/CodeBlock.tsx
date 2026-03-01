'use client';

import { Code } from '@kivora/react';

interface CodeBlockProps {
	code: string;
	language?: string;
}

export function CodeBlock({ code, language = 'ts' }: CodeBlockProps) {
	return (
		<Code
			block
			language={language}
			showLineNumbers
			copyable>
			{code}
		</Code>
	);
}
