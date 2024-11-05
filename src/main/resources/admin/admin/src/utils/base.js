const base = {
    get() {
                return {
            url : "http://localhost:8080/photography/",
            name: "photography",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/photography/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "婚纱摄影网的设计"
        } 
    }
}
export default base
