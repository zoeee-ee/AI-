// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 获取章节容器
    const chaptersContainer = document.getElementById('chapters');
    
    // 新增：顶部章节卡片栏
    const tabBar = document.createElement('div');
    tabBar.className = 'chapter-tabs';
    chaptersContainer.parentNode.insertBefore(tabBar, chaptersContainer);
    
    // 检查questionsData是否存在
    if (typeof questionsData === 'undefined') {
        console.error('questionsData未定义');
        return;
    }
    
    // 清空容器
    chaptersContainer.innerHTML = '';
    
    // 记录所有章节div，便于切换
    const chapterDivs = {};
    let firstChapterId = null;
    
    // 生成章节卡片
    Object.keys(questionsData).forEach((chapterId, idx) => {
        const chapter = questionsData[chapterId];
        // 创建tab按钮
        const tabBtn = document.createElement('button');
        tabBtn.className = 'chapter-tab';
        tabBtn.textContent = chapter.title;
        tabBtn.dataset.chapter = chapterId;
        tabBar.appendChild(tabBtn);
        if (idx === 0) firstChapterId = chapterId;
    });
    
    // 生成所有章节内容，但只显示一个
    Object.keys(questionsData).forEach((chapterId, idx) => {
        const chapter = questionsData[chapterId];
        const chapterDiv = document.createElement('div');
        chapterDiv.className = 'chapter';
        chapterDiv.style.display = idx === 0 ? '' : 'none';
        
        // 章节标题
        const chapterTitle = document.createElement('h2');
        chapterTitle.textContent = chapter.title;
        chapterDiv.appendChild(chapterTitle);
        
        // 题目列表
        const questionsContainer = document.createElement('div');
        questionsContainer.className = 'questions';
        
        // 随机排序题目
        const shuffledQuestions = [...chapter.questions].sort(() => Math.random() - 0.5);
        
        shuffledQuestions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `
                <div class="question-header">
                    <h3>${index + 1}. ${q.question}</h3>
                    <button class="toggle-answer" style="display:none;">显示答案</button>
                </div>
                <div class="options">
                    ${(q.options || []).map(option => `
                        <div class="option">
                            <input type="radio" name="${chapterId}_q${q.id}" value="${option}">
                            <label>${option}</label>
                        </div>
                    `).join('')}
                </div>
                <div class="answer" style="display: none;">
                    <p>正确答案：${q.answer}</p>
                </div>
            `;
            questionsContainer.appendChild(questionDiv);
        });
        
        chapterDiv.appendChild(questionsContainer);
        // 提交按钮和结果区域
        const submitDiv = document.createElement('div');
        submitDiv.className = 'submit-area';
        submitDiv.innerHTML = `
            <button class="submit-btn">提交答案</button>
            <button class="reset-btn" style="display:none;margin-left:16px;">重做本章节</button>
            <div class="result-area" style="display:none;"></div>
        `;
        chapterDiv.appendChild(submitDiv);
        chaptersContainer.appendChild(chapterDiv);
        chapterDivs[chapterId] = chapterDiv;
    });
    
    // tab切换逻辑
    tabBar.querySelectorAll('.chapter-tab').forEach(tabBtn => {
        tabBtn.addEventListener('click', function() {
            const selected = this.dataset.chapter;
            // 切换tab高亮
            tabBar.querySelectorAll('.chapter-tab').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // 切换章节内容
            Object.keys(chapterDivs).forEach(cid => {
                chapterDivs[cid].style.display = cid === selected ? '' : 'none';
            });
        });
    });
    // 默认高亮第一个tab
    if (firstChapterId) {
        tabBar.querySelector(`[data-chapter="${firstChapterId}"]`).classList.add('active');
    }
    
    // 事件监听（考试模式：提交前不显示答案和高亮）
    function bindEvents() {
        // 选项点击时不做任何高亮和答案显示
        document.querySelectorAll('.option input').forEach(input => {
            input.addEventListener('change', function() {
                // 不做任何高亮和答案显示
            });
        });
        // 提交按钮
        document.querySelectorAll('.submit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const chapterDiv = this.closest('.chapter');
                const questions = chapterDiv.querySelectorAll('.question');
                let correct = 0;
                let total = questions.length;
                questions.forEach(qDiv => {
                    const answer = qDiv.querySelector('.answer p').textContent.split('：')[1];
                    const selected = qDiv.querySelector('input[type="radio"]:checked');
                    qDiv.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('correct', 'incorrect');
                    });
                    if (selected) {
                        if (selected.value === answer) {
                            selected.closest('.option').classList.add('correct');
                            correct++;
                        } else {
                            selected.closest('.option').classList.add('incorrect');
                        }
                    }
                    // 提交后显示正确答案
                    qDiv.querySelector('.answer').style.display = 'block';
                });
                // 显示分数和分析
                const resultArea = chapterDiv.querySelector('.result-area');
                resultArea.style.display = '';
                resultArea.innerHTML = `<div class="score-box">
                    <span class="score-main">${correct * 100 / total}分</span>
                    <span class="score-detail">答对 ${correct}/${total} 题，正确率 ${(correct/total*100).toFixed(1)}%</span>
                </div>`;
                // 禁用提交按钮，显示重做按钮
                this.disabled = true;
                chapterDiv.querySelector('.reset-btn').style.display = '';
            });
        });
        // 重做按钮
        document.querySelectorAll('.reset-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const chapterDiv = this.closest('.chapter');
                // 重置所有选项
                chapterDiv.querySelectorAll('input[type="radio"]').forEach(input => {
                    input.checked = false;
                });
                chapterDiv.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('correct', 'incorrect');
                });
                chapterDiv.querySelectorAll('.answer').forEach(ans => {
                    ans.style.display = 'none';
                });
                chapterDiv.querySelector('.result-area').style.display = 'none';
                chapterDiv.querySelector('.submit-btn').disabled = false;
                this.style.display = 'none';
            });
        });
    }
    bindEvents();
}); 