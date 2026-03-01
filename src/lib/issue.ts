import { GITHUB_REPO, KIVORA_VERSION } from './constants';

const REPO = GITHUB_REPO;

/**
 * Generates a GitHub new-issue URL with pre-filled title and body.
 *
 * Title format (conventional):  [Section][ComponentName]: <user fills here>
 * Body includes package version + standard bug/suggestion template.
 */
export function buildIssueUrl(
	section: string,
	component?: string | null,
	type: 'bug' | 'feature' = 'bug',
): string {
	const prefix = type === 'bug' ? '🐞 ' : '✨ ';
	const titleTag = component
		? `${prefix}[${section}][${component}]: `
		: `${prefix}[${section}]: `;

	const bugBody = [
		`> **Package:** \`@kivora/react@${KIVORA_VERSION}\``,
		'',
		'## 📌 Summary',
		'A clear and concise description of the issue.',
		'',
		'---',
		'',
		'## 🎯 Expected Behavior',
		'What should happen instead?',
		'',
		'---',
		'',
		'## 🐞 Current Behavior',
		'What is currently happening? Include logs or error messages if applicable.',
		'',
		'---',
		'',
		'## 🔁 Steps to Reproduce',
		'1. ',
		'2. ',
		'3. ',
		'',
		'---',
		'',
		'## 🌍 Environment',
		'- **OS:**',
		'- **Node version:**',
		'- **Browser (if applicable):**',
		'',
		'---',
		'',
		'## 🔐 Impact',
		'- Severity: <!-- Critical / High / Medium / Low -->',
		'- [ ] Affects all users',
		'- [ ] Edge case',
		'',
		'---',
		'',
		'## 📎 Additional Context',
		'<!-- Screenshots, stack traces, related PRs or issues -->',
	].join('\n');

	const featureBody = [
		`> **Package:** \`@kivora/react@${KIVORA_VERSION}\``,
		'',
		'## ✨ Feature Description',
		'A clear and concise description of the feature or improvement.',
		'',
		'---',
		'',
		'## 🎯 Problem it Solves',
		"Describe the problem or limitation you're trying to address.",
		'',
		'---',
		'',
		'## 💡 Proposed Solution',
		'Describe how you would like this to work.',
		'',
		'---',
		'',
		'## 📎 Additional Context',
		'<!-- Examples, mockups, related issues or references -->',
	].join('\n');

	const body = type === 'bug' ? bugBody : featureBody;
	const params = new URLSearchParams({ title: titleTag, body });
	return `${REPO}/issues/new?${params}`;
}
