const REPO = 'https://github.com/kivora-pro/module';
const KIVORA_VERSION = '0.1.0';

/**
 * Generates a GitHub new-issue URL with pre-filled title and body.
 *
 * Title format (conventional):  [Section][ComponentName]: <user fills here>
 * Body includes package version + standard bug/suggestion template.
 */
export function buildIssueUrl(
	section: string,
	component?: string | null,
): string {
	const titleTag = component
		? `[${section}][${component}]: `
		: `[${section}]: `;

	const body = [
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

	const params = new URLSearchParams({ title: titleTag, body });
	return `${REPO}/issues/new?${params}`;
}
