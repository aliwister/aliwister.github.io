# aliwister.github.io

Personal academic homepage, built by GitHub Pages with plain Jekyll (no theme).

## Editing

| What | File |
|------|------|
| News | `_data/news.yml` (newest first; items past `news_visible` fold under "Older news") |
| Publications | `_data/publications.yml` (`selected: true` shows under the "Selected" filter; optional `image` thumbnail) |
| Experience, education, teaching, service, research interests | `_data/cv.yml` |
| Bio text | `index.html` (the `intro` block) |
| Name, links, avatar | `_config.yml` (`author:`) |
| Styling | `assets/css/main.css` |

## Local preview

```bash
bundle install
bundle exec jekyll serve
```
