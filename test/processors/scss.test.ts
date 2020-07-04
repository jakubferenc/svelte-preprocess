import { scss, sass } from '../../src';
import { CSS_PATTERN, preprocess } from '../utils';

describe(`processor - sass`, () => {
  it('should support external src files', async () => {
    const template = `<style src="./fixtures/style.sass"></style><div></div>`;
    const preprocessed = await preprocess(template, [sass()]);

    expect(preprocessed.toString()).toMatch(CSS_PATTERN);
  });

  it('should support prepended data', async () => {
    const template = `<style src="./fixtures/stysassxt}"></style><div></div>`;
    const options = { prependData: '// potato' };
    const preprocessed = await preprocess(template, [sass(options)]);

    expect(preprocessed.toString()).toContain('// potato');
  });
});

describe(`processor - scss`, () => {
  it('should support external src files', async () => {
    const template = `<style src="./fixtures/style.scss"></style><div></div>`;
    const preprocessed = await preprocess(template, [scss()]);

    expect(preprocessed.toString()).toMatch(CSS_PATTERN);
  });

  it('should support prepended data', async () => {
    const template = `<style src="./fixtures/style.scss"></style><div></div>`;
    const options = { prependData: '/* potato */' };
    const preprocessed = await preprocess(template, [scss(options)]);

    expect(preprocessed.toString()).toContain('/* potato */');
  });
});