# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload', grace_period: 0.5, override_url: true, :port => '35729', :host => '127.0.0.1' do
  watch('css/_sass/main.sass')
  # watch(%r{css/_sass/.+\.(sass|scss)$})
  # watch(%r{_includes/.+\.html})
  # watch(%r{_layouts/.+\.(html|haml|erb|slim)})
  # watch(%r{_post/.+\.(md|markdown)})
  # Rails Assets Pipeline
  # watch(%r{(app|vendor)(/assets/\w+/(.+\.(css|js|html))).*}) { |m| "/assets/#{m[3]}" }
end

# guard :shell do
#   watch(/.*/) { `git status` }
# end
